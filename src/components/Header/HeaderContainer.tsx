import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import {setAuthUserData} from '../../redux/authReducer'
import { authAPI } from '../../api/api';


type HeaderContainerType = any
 class HeaderContainer extends React.Component<HeaderContainerType>  {

    componentDidMount() {
        authAPI.me().then(response => {
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
