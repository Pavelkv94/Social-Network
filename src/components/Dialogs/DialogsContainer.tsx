import { sendMessageCreator, UserMessageType, UserType } from '../../redux/dialogsReducer';
import { ActionTypes, ReduxStateType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose, Dispatch } from 'redux';

type MapStateToPropsType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
}
type MapDispatchToPropsType = {
    sendMessageCreator: (newMessageBody: string) => void
}

let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): MapDispatchToPropsType => {
    return {
        sendMessageCreator: (newMessageBody: string) => { dispatch(sendMessageCreator(newMessageBody)) },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)