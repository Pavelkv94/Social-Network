import { ActionTypes, DialogsStateType, SendMessageType, UpdateNewMessageType } from "./state";


export const dialogsReducer = (state: DialogsStateType, action:ActionTypes) => {
    switch(action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND-MESSAGE": 
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messagesData.push({ id: "7", message: body },)
        return state;
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