import React from 'react';
import { connect } from "react-redux";
import { Profile } from './Profile';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { ReduxStateType } from '../../redux/redux-store';
import { getUserProfileThunkCreator, ProfileDataType, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
type MapStatePropsType = {
    profile: ProfileDataType
    status: string
}
type MapDispatchPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<CommonPropsType>{

    componentDidMount() {
        // debugger
        //! проверка
       // let userId = this.props.match.params.userId.slice(3);
        let userId = "16082";
        //console.log(this.props.match.params.userId.slice(3))
        console.log(this.props.status)
        if (!userId) { userId = "2" }

        this.props.getUserProfileThunkCreator(userId);
        //! setTimeout для теста
        setTimeout(()=>
        this.props.getUserStatus(userId), 1000)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus} />
        )
    }
}

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => ({
    profile: state.profilePage.profileData,
    status: state.profilePage.status,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)