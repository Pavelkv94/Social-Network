import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { dialogsReducer, DialogsStateType, SendMessageType, UpdateNewMessageType } from "./dialogsReducer";
import { AddPostActionType, profileReducer, ProfileStateType, SetStatusType, SetUserProfileType, UpdatePostActionType } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { CurrentPageType, FollowType, SetUsersType, ToggleIsFetchingType, ToggleIsFollowingProgressType, TotalCountType, UnFollowType, usersReducer, UsersStateType } from "./usersReducer";
import { authReducer, setAuthUserDataType, InitialAuthType } from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

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
    | SetStatusType


export type DispatchType = (action: ActionTypes) => void
//Обьединяем наши редьюсеры
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});
export type ReduxStateType = {
    profilePage: ProfileStateType
    dialogsPage: DialogsStateType
    sidebarPage: any
    usersPage: UsersStateType
    auth: InitialAuthType
}
//export type ReduxStateType = ReturnType<typeof reducers>
export type ReduxStoreType = {
    getState: () => ReduxStateType
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
}
//отдаем редьюсеры стору
export let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store