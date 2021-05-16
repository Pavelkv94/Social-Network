import React, { ChangeEvent } from 'react';
import { Redirect } from 'react-router';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { UserMessageType, UserType } from '../../redux/dialogsReducer';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControl/FormControl';
import { DialogItem } from './DialogItems/DialogItem';
import d from "./Dialogs.module.css"
import { Message } from './Messages/Message';

export type DialogsType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
    newMessageBody: string
    isAuth: boolean
    sendMessageCreator: (newMessageBody: string) => void
}

type NewMessageType = {
    newMessageBody: string
}


export function Dialogs(props: DialogsType) {
    const dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    const messageElements = props.messagesData.map(m => <Message mes={m.message} key={m.id} />);

    //todo если мы не залогинены то редирект происходит на страницу логина
    //if (!props.isAuth) return <Redirect to={'/login'} />

    let addNewMessage = (values: NewMessageType) => {
        props.sendMessageCreator(values.newMessageBody)
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={d.messageItems}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
    )
}
const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props: InjectedFormProps<NewMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newMessageBody"
                    placeholder="Enter your message"
                    validate={[requiredField, maxLength100]}
                />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<NewMessageType>({ form: "dialogAddMessageForm" })(AddMessageForm)