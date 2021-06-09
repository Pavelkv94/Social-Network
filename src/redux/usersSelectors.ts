import { createSelector } from "reselect";
import { ReduxStateType } from "./redux-store"

export const getUsers = (state: ReduxStateType) => {
    return state.usersPage.users;
}

export const getPageSize = (state: ReduxStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUserCount = (state: ReduxStateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: ReduxStateType) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state: ReduxStateType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state: ReduxStateType) => {
    return state.usersPage.followingInProgress;
}

//@ts-ignore
//todo используем reselect-----------------
export const getUsersSelector = (state: ReduxStateType) => {
    return getUsers(state).filter(u => true)
}
//@ts-ignore
export const getUsersSuperSelector = createSelector( //библиотека reselect
    getUsers, // зависимость
    getTotalUserCount,// зависимость
    (users) => { return users.filter(u => true) //функция
    })
//todo -------------------------------------^^^