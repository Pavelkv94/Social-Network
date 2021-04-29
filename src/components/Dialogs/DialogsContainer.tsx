import { sendMessageCreator, updateNewMessageBodyCreator, UserMessageType, UserType } from '../../redux/dialogsReducer';
import { DispatchType, ReduxStateType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { InitialAuthType } from '../../redux/authReducer';

type MapStateToPropsType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
    newMessageBody: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessageCreator: () => void
    updateNewMessageBodyCreator: (body: string) => void
}

let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
        sendMessageCreator: () => { dispatch(sendMessageCreator()) },
        updateNewMessageBodyCreator: (body: string) => { dispatch(updateNewMessageBodyCreator(body)) }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);