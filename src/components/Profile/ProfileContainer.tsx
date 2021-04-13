import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Profile } from './Profile';
import { setUserProfile } from './../../redux/profileReducer'
import { withRouter } from 'react-router';

type ProfileContainerType = any     //!-----------------<<<<<<<<<<<<<<<
class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 16464 }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId)
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
let mapStateToProps = (state: any) => ({     //!-----------------<<<<<<<<<<<<<<<
    profile: state.profilePage.profileData
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);