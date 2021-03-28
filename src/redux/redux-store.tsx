import { combineReducers, createStore, Store } from "redux";
import { dialogsReducer, DialogsStateType, SendMessageType, UpdateNewMessageType } from "./dialogsReducer";
import { AddPostActionType, profileReducer, ProfileStateType, UpdatePostActionType } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { FollowType, UnFollowType } from "./usersReducer";


export type ActionTypes = AddPostActionType | UpdatePostActionType | UpdateNewMessageType | SendMessageType | FollowType | UnFollowType



export type DispatchType = (action: ActionTypes) => void
//Обьединяем наши редьюсеры
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
});
export type  ReduxStateType = {
    profilePage: ProfileStateType
    dialogsPage: DialogsStateType
    sidebarPage: any
    }
export type ReduxStoreType = {
    getState: () => ReduxStateType
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
}
//отдаем редьюсеры стору
export let store: Store = createStore(reducers);
