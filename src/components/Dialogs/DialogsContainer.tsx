import React, { ChangeEvent } from 'react';
import { sendMessageCreator,  updateNewMessageBodyCreator, UserMessageType, UserType } from '../../redux/dialogsReducer';
import { ReduxStoreType } from '../../redux/redux-store';
import { DialogItem } from './DialogItems/DialogItem';
import { Dialogs } from './Dialogs';
import d from "./Dialogs.module.css"
import { Message } from './Messages/Message';

export type DialogsContainerType = {
    store: ReduxStoreType
}


export function DialogsContainer(props: DialogsContainerType) {
    let state= props.store.getState();
        const onSendMessageClick = () => {props.store.dispatch(sendMessageCreator())};
    const onNewMessageChange =(body:string) => {props.store.dispatch(updateNewMessageBodyCreator(body))}
    return (
        <Dialogs
        dialogsData={state.dialogsPage.dialogsData}
    messagesData={state.dialogsPage.messagesData}
    newMessageBody={state.dialogsPage.newMessageBody}
    sendMessageCreator={onSendMessageClick}
    updateNewMessageBodyCreator={onNewMessageChange}
        />
    )
}