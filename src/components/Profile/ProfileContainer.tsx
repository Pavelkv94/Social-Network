import React from 'react';
import { connect } from "react-redux";
import { Profile } from './Profile';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReduxStateType } from '../../redux/redux-store';
import { getUserProfileThunkCreator, ProfileDataType, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
type MapStatePropsType = {
    profile: ProfileDataType
    status: string
    authUserId: string | null
    isAuth: boolean
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
        console.log(typeof this.props.authUserId)
        let userId = this.props.match.params.userId;
        //console.log(this.props.match.params.userId.slice(3))
        console.log(this.props.status)
        if (!userId) {
            //@ts-ignore
            //userId = this.props.authUserId
            userId = " + 16082"
        }

        this.props.getUserProfileThunkCreator(userId.slice(3));
        this.props.getUserStatus(userId.slice(3));
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
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)