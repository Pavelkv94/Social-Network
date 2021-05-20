import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { logout } from '../../redux/authReducer'
import { ReduxStateType } from '../../redux/redux-store';

export type HeaderPropsType = {
    isAuth: boolean
    email: string | null
    logout: () => void
}
class HeaderContainer extends React.Component<HeaderPropsType>  {

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
});

export default connect(mapStateToProps, { logout })(HeaderContainer)
