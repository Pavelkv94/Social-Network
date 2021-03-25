import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator, UserMessageType, UserType } from '../../redux/dialogsReducer';
import { ReduxStoreType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';
import { StoreContext } from '../..//StoreContext';

export type DialogsContainerType = {
    // store: ReduxStoreType
}


export function DialogsContainer(props: DialogsContainerType) {

    return (
        <StoreContext.Consumer>
            {//!фигурная скобка с новой строки
            (store: ReduxStoreType) => {
            let state = store.getState();
            const onSendMessageClick = () => { store.dispatch(sendMessageCreator()) };
            const onNewMessageChange = (body: string) => { store.dispatch(updateNewMessageBodyCreator(body)) }
            return <Dialogs
                dialogsData={state.dialogsPage.dialogsData}
                messagesData={state.dialogsPage.messagesData}
                newMessageBody={state.dialogsPage.newMessageBody}
                sendMessageCreator={onSendMessageClick}
                updateNewMessageBodyCreator={onNewMessageChange}
            />

        }
        }</StoreContext.Consumer>
    )
}