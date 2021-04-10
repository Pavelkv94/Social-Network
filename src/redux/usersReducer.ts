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
let initialState: UsersStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 2
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
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

//TODO----------------------создаем ACTION-CREATORS----------
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
