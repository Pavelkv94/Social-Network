import React, { ChangeEvent } from 'react';
import { DialogsType } from '../../redux/state';
import { sendMessageCreator,  updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import { DialogItem } from './DialogItems/DialogItem';
import d from "./Dialogs.module.css"
import { Message } from './Messages/Message';



export function Dialogs(props: DialogsType) {
    const dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    const messageElements = props.messagesData.map(m => <Message mes={m.message} />);
    const onSendMessageClick = () => {props.dispatch(sendMessageCreator())};
    const onNewMessageChange =(e:ChangeEvent<HTMLTextAreaElement>) => {props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))}
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