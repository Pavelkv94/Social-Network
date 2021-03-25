import { combineReducers, createStore, Store } from "redux";
import { dialogsReducer, DialogsStateType } from "./dialogsReducer";
import { profileReducer, ProfileStateType } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";


export type ActionTypes = AddPostActionType | UpdatePostActionType | UpdateNewMessageType | SendMessageType
export type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}
// export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdatePostActionType = {
    type: "UPDATE-POST-TEXT"
    newText: string
}
export type UpdateNewMessageType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
export type SendMessageType = {
    type: "SEND-MESSAGE"

}
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
