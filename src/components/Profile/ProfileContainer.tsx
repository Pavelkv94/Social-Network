import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Profile } from './Profile';
import { setUserProfile } from './../../redux/profileReducer'

type ProfileContainerType = any     //!-----------------<<<<<<<<<<<<<<<
class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);