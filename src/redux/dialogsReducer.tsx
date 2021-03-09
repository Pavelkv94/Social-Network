import { ActionTypes, DialogsStateType } from "./state";


export const dialogsReducer = (state: DialogsStateType, action:ActionTypes) => {

    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.newMessageBody = action.body;
    }
    else if (action.type === "SEND-MESSAGE") {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messagesData.push({ id: "7", message: body },)

    }
    return state;
}