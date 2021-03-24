import { combineReducers, createStore } from "redux";
import { dialogsReducer, DialogsStateType, UserMessageType, UserType } from "./dialogsReducer";
import { profileReducer, PostDataType, ProfileDataType, ProfileStateType } from "./profileReducer";
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
type ReduxStoreType = {
    getState: () => ReduxStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}
//отдаем редьюсеры стору
export let store: ReduxStoreType = createStore(reducers);
