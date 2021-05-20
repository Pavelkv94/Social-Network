import React from 'react';
import { connect } from "react-redux";
import { Profile } from './Profile';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReduxStateType } from '../../redux/redux-store';
import { getUserProfileThunkCreator, ProfileDataType, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { compose } from 'redux';

type MapStatePropsType = {
    profile: ProfileDataType
    status: string
    authUserId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfileThunkCreator: (userId: number | null) => void
    getUserStatus: (userId: number | null) => void
    updateUserStatus: (status: string) => void
}
type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<CommonPropsType>{

    componentDidMount() {
        let userId: number | null = +this.props.match.params.userId;
        console.log(this.props)
        console.log(this.props.match.params)
        if (!userId) {
            userId = this.props.authUserId;
            console.log(userId)
            if (!userId) {
                // todo: may be replace push with Redirect??
                this.props.history.push("/login");
            }
        }
        //! ошибка с отображением пользователей
        // console.log(this.props.authUserId)
        // let userId: number | null = Number(this.props.match.params.userId.slice(3));
        // console.log(this.props)
        // console.log(userId)
        // if (!userId) {
        //     userId = Number(this.props.authUserId);
        //     if (!userId) {
        //         this.props.history.push("/login");
        //     }
        // }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatus(userId);
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
)(ProfileContainer)