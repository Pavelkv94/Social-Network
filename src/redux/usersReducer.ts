import { ActionTypes } from "./redux-store";

export type LocationType = {
  city: string;
  country: string;
};
export type UserOfSearchType = {
  id: number;
  followed: boolean;
  fullName: string;
  status: string;
  location: LocationType;
};
export type UsersOfSearchType = Array<UserOfSearchType>;
export type UsersStateType = {
  users: UsersOfSearchType;
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
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Dmitry",
      status: "I am a boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      followed: true,
      fullName: "Ann",
      status: "I am a english man",
      location: { city: "Gomel", country: "Belarus" },
    },
    {
      id: 3,
      followed: true,
      fullName: "Kalvin",
      status: "I am js developer",
      location: { city: "Moskow", country: "Russia" },
    },
    {
      id: 4,
      followed: true,
      fullName: "Henry",
      status: "west cost customs",
      location: { city: "Seatle", country: "United St." },
    },
    {
      id: 5,
      followed: false,
      fullName: "Dominica",
      status: "I am a lady",
      location: { city: "Rio", country: "Brazil" },
    },
  ],
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
