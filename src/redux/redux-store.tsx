import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";


export type UserType = {
    id: string
    name: string
}

export type UserMessageType = {
    id: string
    message: string
}

export type PostDataType = {
    id: string
    message: string
    src: string
    likeCount: string
}

export type ProfileDataType = {
    background: string
    ava: string
}

export type DialogsType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void
}

export type DialogsStateType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
    newMessageBody: string
}
export type ProfileType = {
    postData: Array<PostDataType>
    newPostText: string
    profileData: Array<ProfileDataType>
    dispatch: (action: ActionTypes) => void
}
export type ProfileStateType = {
    postData: Array<PostDataType>
    newPostText: string
    profileData: Array<ProfileDataType>
}
export type StateType = {
    dialogs: DialogsStateType
    profile: ProfileStateType
    sidebar: any
}
export type StoreType = {
    // _state: StateType
    getState: () => StateType
    // _callSubscriber: () => void
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}
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
type ReduxStoreType = {
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}
//отдаем редьюсеры стору
export let store: ReduxStoreType = createStore(reducers);
