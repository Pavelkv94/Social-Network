import { updateObjectInArray } from './../utils/helpers/objects-helpers';
import { AxiosResponse } from "axios";
import { Dispatch } from "react";
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
export type FollowType = ReturnType<typeof followSuccess>
export type UnFollowType = ReturnType<typeof unfollowSuccess>
export type SetUsersType = ReturnType<typeof setUsers>
export type CurrentPageType = ReturnType<typeof setCurrentPage>
export type TotalCountType = ReturnType<typeof setTotalCount>
export type ToggleIsFetchingType =ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>

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
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
        //  state.users.map((u) => {
        //   //map  то же самое что и users: [...state.users]
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
      };

    case "SOCIAL-NETWORK/USERS/UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
        // state.users.map((u) => {
        //   //map  то же самое что и users: [...state.users]
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
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
//follow friends
export const followSuccess = (userId: number) => {
  return {
    type: "SOCIAL-NETWORK/USERS/FOLLOW",
    userId: userId,
  } as const;
};
//unfollow friends
export const unfollowSuccess = (userId: number) => {
  return {
    type: "SOCIAL-NETWORK/USERS/UNFOLLOW",
    userId: userId,
  } as const;
};
//засунуть пользователей которых мы найдем в стейт
export const setUsers = (users: UsersOfSearchType) => {
  return {
    type: "SOCIAL-NETWORK/USERS/SET-USERS",
    users: users,
  } as const;
};
//установить текущую страницу
export const setCurrentPage = (currentPage: number) => {
  return {
    type: "SOCIAL-NETWORK/USERS/SET-CURRENT-PAGE",
    currentPage: currentPage
  } as const;
};
//установить общее кол-во пользователей с сервера
export const setTotalCount = (totalUsersCount: number) => {
  return {
    type: "SOCIAL-NETWORK/USERS/SET-TOTAL-COUNT",
    totalUsersCount: totalUsersCount
  } as const;
};
//создаем прелоадер
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: "SOCIAL-NETWORK/USERS/TOGGLE-IS-FETCHING",
    isFetching: isFetching
  } as const;
};
//отключаем кнопку фоловинга при нажатии
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
  return {
    type: "SOCIAL-NETWORK/USERS/TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
  } as const;
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

const followUnfollowFlow = async (
  dispatch: Dispatch<ActionTypes>,
  userId: number,
  apiMethod: (userId: number | null) => Promise<AxiosResponse<any>>,
  actionCreator: (userId: number) => FollowType | UnFollowType) => {

  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await apiMethod(userId)
  if (response.data.resultCode === ResultCodeENum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
}

export const followThunkCreator = (userId: number): ThunkType => {

  return async (dispatch: Dispatch<ActionTypes>) => {
    let apiMethod = usersAPI.getFollow.bind(usersAPI);
    let actionCreator = followSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
  }
}

export const unFollowThunkCreator = (userId: number): ThunkType => {

  return async (dispatch: Dispatch<ActionTypes>) => {
    let apiMethod = usersAPI.getUnFollow.bind(usersAPI);
    let actionCreator = unfollowSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
  }
}