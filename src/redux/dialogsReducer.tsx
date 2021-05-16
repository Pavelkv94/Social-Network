import { ActionTypes } from "./redux-store";

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
}
// export type UpdateNewMessageType = {
//     type: "UPDATE-NEW-MESSAGE-BODY"
//     body: string
// }
export type SendMessageType = {
    type: "SEND-MESSAGE"
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
}

export const dialogsReducer = (state: DialogsStateType = initialState, action: ActionTypes): DialogsStateType => {

    switch (action.type) {
        case "SEND-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: "7", message: body }] //используем спрэд-оператор вместо push
            }

        default: return state;
    }
}

//TODO----------------------создаем ACTION-CREATORS----------

export const sendMessageCreator = (newMessageBody: string): SendMessageType => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody

    }
}