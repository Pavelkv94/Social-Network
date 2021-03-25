import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator, UserMessageType, UserType } from '../../redux/dialogsReducer';
import { ActionTypes, DispatchType, ReduxStateType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

type MapStateToPropsType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
    newMessageBody: string
}
type MapDispatchToPropsType = {
    sendMessageCreator:()=>void
    updateNewMessageBodyCreator:(body:string)=>void
}

let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch: DispatchType):MapDispatchToPropsType => {
    return {
        sendMessageCreator: () => { dispatch(sendMessageCreator()) },
        updateNewMessageBodyCreator: (body: string) => { dispatch(updateNewMessageBodyCreator(body)) }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);