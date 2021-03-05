import React from 'react';
import { DialogsType } from '../../redux/state';
import { DialogItem } from './DialogItems/DialogItem';
import d from "./Dialogs.module.css"
import { Message } from './Messages/Message';



export function Dialogs(props: DialogsType) {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)}

            </div>

            <div className={d.messageItems}>
                {props.messagesData.map(m=><Message mes={m.message} />)}
            </div>

        </div>
    )
}