import { ActionTypes, SendMessageType, UpdateNewMessageType } from "./redux-store";


export type UserType = {
    id: string
    name: string
}

export type UserMessageType = {
    id: string
    message: string
}
export type DialogsStateType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
    newMessageBody: string
}



let initialState: DialogsStateType = {
    dialogsData: [
        { id: "1", name: "Anna" },
        { id: "2", name: "Dimych" },
        { id: "3", name: "Kelvin" },
        { id: "4", name: "Eliza" },
        { id: "5", name: "Matt" },
        { id: "6", name: "Connor" }
    ],
    messagesData: [
        { id: "1", message: "hi" },
        { id: "2", message: "How are you?" },
        { id: "3", message: "It's cool!!" },
        { id: "4", message: "Nice!" },
        { id: "5", message: " " },
        { id: "6", message: "Im sexy" },
    ],
    newMessageBody: "",


}

export const dialogsReducer = (state: DialogsStateType = initialState, action: ActionTypes): DialogsStateType => {
    let stateCopy = { ...state };
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":

            stateCopy.newMessageBody = action.body;
            return stateCopy;

        case "SEND-MESSAGE":

            stateCopy.messagesData = [...state.messagesData]
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = "";
            stateCopy.messagesData.push({ id: "7", message: body },)
            return stateCopy;

        default: return state;
    }
}

//TODO----------------------создаем ACTION-CREATORS----------
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageType => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    }
}
export const sendMessageCreator = (): SendMessageType => {
    return {
        type: "SEND-MESSAGE",


    }
}