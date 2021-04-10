import { ActionTypes } from "./redux-store";

export type LocationType = {
  city: string;
  country: string;
};

export type UserOfSearchType = {
  id: number;
  photos: any
  followed: boolean;
  name: string;
  status: string;
  //location: LocationType;
};
export type UsersOfSearchType = Array<UserOfSearchType>;
export type UsersStateType = {
  users: UsersOfSearchType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
};

export type FollowType = {
  type: "FOLLOW";
  userId: number;
};
export type UnFollowType = {
  type: "UNFOLLOW";
  userId: number;
};

export type SetUsersType = {
  type: "SET-USERS";
  users: UsersOfSearchType;
};
export type CurrentPageType = {
  type: "SET-CURRENT-PAGE"
  currentPage: number
}
export type TotalCountType = {
  type: "SET-TOTAL-COUNT",
  totalUsersCount: number
}
export type ToggleIsFetchingType = {
  type: "TOGGLE-IS-FETCHING",
  isFetching: boolean
};
let initialState: UsersStateType = {
  users: [],
  pageSize: 25,
  totalUsersCount: 5,
  currentPage: 1,
  isFetching: false
};

export const usersReducer = (
  state: UsersStateType = initialState,
  action: ActionTypes
): UsersStateType => {
  switch (action.type) {
    case "FOLLOW":
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

    case "UNFOLLOW":
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

    case "SET-USERS": {
      return { ...state, users: action.users };
    };
    case "SET-CURRENT-PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SET-TOTAL-COUNT": {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case "TOGGLE-IS-FETCHING": {
      return {...state, isFetching: action.isFetching}
    }
    default:
      return state;
  }
};

//TODO----------------------создаем ACTION-CREATORS----------
//! переписать под payload {}
//follow friends
export const followAC = (userId: number): FollowType => {
  return {
    type: "FOLLOW",
    userId: userId,
  };
};
//unfollow friends
export const unfollowAC = (userId: number): UnFollowType => {
  return {
    type: "UNFOLLOW",
    userId: userId,
  };
};
//засунуть пользователей которых мы найдем в стейт
export const setUserAC = (users: UsersOfSearchType): SetUsersType => {
  return {
    type: "SET-USERS",
    users: users,
  };
};
//установить текущую страницу
export const setCurrentPageAC = (currentPage: number): CurrentPageType => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage: currentPage
  };
};
//установить общее кол-во пользователей с сервера
export const setTotalCountAC = (totalUsersCount: number): TotalCountType => {
  return {
    type: "SET-TOTAL-COUNT",
    totalUsersCount: totalUsersCount
  };
};
//создаем прелоадер
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingType => {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching: isFetching
  };
};
