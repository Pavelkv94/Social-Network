import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { ResultCodeENum, usersAPI } from "../api/api";
import { ActionTypes, ThunkType } from "./redux-store";

export type LocationType = {
  city: string;
  country: string;
};
export type PhotosType = {
  small: string | null
  large: string | null
}
export type UserOfSearchType = {
  id: number;
  photos: PhotosType
  followed: boolean;
  name: string;
  status: string;
};
export type UsersOfSearchType = Array<UserOfSearchType>;
export type UsersStateType = {
  users: UsersOfSearchType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number | null>
};
export type FollowType = {
  type: "SOCIAL-NETWORK/USERS/FOLLOW";
  userId: number;
};
export type UnFollowType = {
  type: "SOCIAL-NETWORK/USERS/UNFOLLOW";
  userId: number;
};
export type SetUsersType = {
  type: "SOCIAL-NETWORK/USERS/SET-USERS";
  users: UsersOfSearchType;
};
export type CurrentPageType = {
  type: "SOCIAL-NETWORK/USERS/SET-CURRENT-PAGE"
  currentPage: number
}
export type TotalCountType = {
  type: "SOCIAL-NETWORK/USERS/SET-TOTAL-COUNT",
  totalUsersCount: number
}
export type ToggleIsFetchingType = {
  type: "SOCIAL-NETWORK/USERS/TOGGLE-IS-FETCHING",
  isFetching: boolean
};
export type ToggleIsFollowingProgressType = {
  type: "SOCIAL-NETWORK/USERS/TOGGLE-IS-FOLLOWING-PROGRESS",
  isFetching: boolean
  userId: number
};
let initialState: UsersStateType = {
  users: [],
  pageSize: 25,
  totalUsersCount: 5,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

export const usersReducer = (
  state: UsersStateType = initialState,
  action: ActionTypes
): UsersStateType => {
  switch (action.type) {
    case "SOCIAL-NETWORK/USERS/FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          //map  то же самое что и users: [...state.users]
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case "SOCIAL-NETWORK/USERS/UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          //map  то же самое что и users: [...state.users]
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case "SOCIAL-NETWORK/USERS/SET-USERS": {
      return { ...state, users: action.users };
    };
    case "SOCIAL-NETWORK/USERS/SET-CURRENT-PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SOCIAL-NETWORK/USERS/SET-TOTAL-COUNT": {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case "SOCIAL-NETWORK/USERS/TOGGLE-IS-FETCHING": {
      return { ...state, isFetching: action.isFetching }
    }
    case "SOCIAL-NETWORK/USERS/TOGGLE-IS-FOLLOWING-PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state;
  }
};

//TODO----------------------создаем ACTION-CREATORS----------
//! переписать под payload {}
//follow friends
export const followSuccess = (userId: number): FollowType => {
  return {
    type: "SOCIAL-NETWORK/USERS/FOLLOW",
    userId: userId,
  };
};
//unfollow friends
export const unfollowSuccess = (userId: number): UnFollowType => {
  return {
    type: "SOCIAL-NETWORK/USERS/UNFOLLOW",
    userId: userId,
  };
};
//засунуть пользователей которых мы найдем в стейт
export const setUsers = (users: UsersOfSearchType): SetUsersType => {
  return {
    type: "SOCIAL-NETWORK/USERS/SET-USERS",
    users: users,
  };
};
//установить текущую страницу
export const setCurrentPage = (currentPage: number): CurrentPageType => {
  return {
    type: "SOCIAL-NETWORK/USERS/SET-CURRENT-PAGE",
    currentPage: currentPage
  };
};
//установить общее кол-во пользователей с сервера
export const setTotalCount = (totalUsersCount: number): TotalCountType => {
  return {
    type: "SOCIAL-NETWORK/USERS/SET-TOTAL-COUNT",
    totalUsersCount: totalUsersCount
  };
};
//создаем прелоадер
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
  return {
    type: "SOCIAL-NETWORK/USERS/TOGGLE-IS-FETCHING",
    isFetching: isFetching
  };
};
//отключаем кнопку фоловинга при нажатии
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressType => {
  return {
    type: "SOCIAL-NETWORK/USERS/TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
  };
};

//todo Создаем ThunkCreator

export const getUsersThunkCreator = (page: number, pageSize: number): ThunkType => {
  //через замыкание
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
  }
}

export const followThunkCreator = (userId: number): ThunkType => {

  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    let response = await usersAPI.getFollow(userId)
    if (response.data.resultCode === ResultCodeENum.Success) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
  }
}

export const unFollowThunkCreator = (userId: number): ThunkType => {

  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    let response = await usersAPI.getUnFollow(userId)
    if (response.data.resultCode === ResultCodeENum.Success) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
  }
}