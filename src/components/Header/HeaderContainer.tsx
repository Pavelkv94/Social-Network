import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { getAuthUserDataThunkCreator, logout } from '../../redux/authReducer'
import { ReduxStateType } from '../../redux/redux-store';

export type HeaderPropsType = {
    isAuth: boolean
    email: string | null
    getAuthUserDataThunkCreator: () => void
    logout: () => void
}
class HeaderContainer extends React.Component<HeaderPropsType>  {

    componentDidMount() {
        this.props.getAuthUserDataThunkCreator();
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
});

export default connect(mapStateToProps, { getAuthUserDataThunkCreator, logout })(HeaderContainer)
