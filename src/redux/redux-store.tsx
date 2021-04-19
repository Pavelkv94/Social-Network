import { combineReducers, createStore, Store } from "redux";
import { dialogsReducer, DialogsStateType, SendMessageType, UpdateNewMessageType } from "./dialogsReducer";
import { AddPostActionType, profileReducer, ProfileStateType, SetUserProfileType, UpdatePostActionType } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { CurrentPageType, FollowType, SetUsersType, ToggleIsFetchingType, ToggleIsFollowingProgressType, TotalCountType, UnFollowType, usersReducer, UsersStateType } from "./usersReducer";
import { authReducer, setAuthUserDataType } from "./authReducer";


export type ActionTypes =
    AddPostActionType
    | UpdatePostActionType
    | UpdateNewMessageType
    | SendMessageType
    | FollowType
    | UnFollowType
    | SetUsersType
    | CurrentPageType
    | TotalCountType
    | ToggleIsFetchingType
    | SetUserProfileType
    | setAuthUserDataType
    | ToggleIsFollowingProgressType


export type DispatchType = (action: ActionTypes) => void
//Обьединяем наши редьюсеры
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
export type ReduxStateType = {
    profilePage: ProfileStateType
    dialogsPage: DialogsStateType
    sidebarPage: any
    usersPage: UsersStateType
}
export type ReduxStoreType = {
    getState: () => ReduxStateType
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
}
//отдаем редьюсеры стору
export let store: Store = createStore(reducers);

//@ts-ignore
window.store = store