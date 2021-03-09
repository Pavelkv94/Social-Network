import { ActionTypes, DialogsStateType } from "./state";


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