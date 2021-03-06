import React from 'react';
import { connect } from "react-redux";
import { Profile } from './Profile';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReduxStateType } from '../../redux/redux-store';
import { getUserProfileThunkCreator, ProfileDataType, getUserStatus, updateUserStatus, saveProfileTC } from '../../redux/profileReducer'
import { compose } from 'redux';
import { savePhotoTC } from './../../redux/profileReducer'

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
    savePhotoTC: (e: any) => void
    saveProfileTC: (formData: ProfileDataType) => void
}
type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<CommonPropsType>{
    //обьединение логики
    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                // todo: may be replace push with Redirect??
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }
    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhotoTC}
                saveProfile={this.props.saveProfileTC}
            />
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
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatus, updateUserStatus, savePhotoTC, saveProfileTC }),
    withRouter,
)(ProfileContainer)