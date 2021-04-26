import React from 'react';
import { connect } from "react-redux";
import { Profile } from './Profile';
import { setUserProfile } from './../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router';
import { ReduxStateType } from '../../redux/redux-store';
import { usersAPI } from '../../api/api';
type MapStatePropsType = {
    profile: any
}
type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}
type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<CommonPropsType>{

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) { userId = '2' }

        usersAPI.getProfile(userId)
            .then(response => {
                //debugger
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        console.log(this.props)
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state: ReduxStateType): MapStatePropsType => ({     //!-----------------<<<<<<<<<<<<<<<
    profile: state.profilePage.profileData
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);