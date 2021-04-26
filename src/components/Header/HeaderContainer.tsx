import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { getAuthUserDataThunkCreator } from '../../redux/authReducer'

type HeaderContainerType = {
    isAuth: boolean
    email: string
    getAuthUserDataThunkCreator: () => void
}
class HeaderContainer extends React.Component<HeaderContainerType>  {

    componentDidMount() {
        this.props.getAuthUserDataThunkCreator();
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
});

export default connect(mapStateToProps, { getAuthUserDataThunkCreator })(HeaderContainer)
