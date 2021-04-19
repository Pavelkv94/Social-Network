import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import {setAuthUserData} from '../../redux/authReducer'


type HeaderContainerType = any
 class HeaderContainer extends React.Component<HeaderContainerType>  {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {
           // debugger
           if(response.data.resultCode === 0 ) {
               let {id, login, email} = response.data.data
               this.props.setAuthUserData(id, login, email)
           }
        });
    }

    render() {
        return <Header {...this.props} />

    }
}
const mapStateToProps = (state:any) =>({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
});

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)
