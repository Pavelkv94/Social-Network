import React from 'react';
import { connect } from "react-redux";
import { Profile } from './Profile';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { ReduxStateType } from '../../redux/redux-store';
import { getUserProfileThunkCreator } from '../../redux/profileReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
type MapStatePropsType = {
    profile: any
    //isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<CommonPropsType>{

    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;
        if (!userId) { userId = '2' }


        this.props.getUserProfileThunkCreator(userId)
    }
    render() {
        console.log(this.props)


        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => ({
    profile: state.profilePage.profileData,
});

export default compose(
    connect(mapStateToProps, { getUserProfileThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)