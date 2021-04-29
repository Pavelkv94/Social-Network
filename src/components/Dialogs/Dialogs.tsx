import React, { ChangeEvent } from 'react';
import { Redirect } from 'react-router';
import { UserMessageType, UserType } from '../../redux/dialogsReducer';
import { DialogItem } from './DialogItems/DialogItem';
import d from "./Dialogs.module.css"
import { Message } from './Messages/Message';

export type DialogsType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
    newMessageBody: string
    isAuth:boolean
    sendMessageCreator: () => void
    updateNewMessageBodyCreator: (body: string) => void
}

export function Dialogs(props: DialogsType) {
    const dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    const messageElements = props.messagesData.map(m => <Message mes={m.message} key={m.id} />);
    const onSendMessageClick = () => { props.sendMessageCreator(); };
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => { props.updateNewMessageBodyCreator(e.currentTarget.value) }

    //todo если мы не залогинены то редирект происходит на страницу логина
if (!props.isAuth) return <Redirect to={'/login'} />


    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={d.messageItems}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea placeholder="Enter your message" value={props.newMessageBody} onChange={onNewMessageChange}></textarea> </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>
    )
}