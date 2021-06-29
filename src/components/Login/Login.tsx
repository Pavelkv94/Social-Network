import { connect } from "react-redux"
import { Redirect } from "react-router"
import { reduxForm } from "redux-form"
import { login } from "../../redux/authReducer"
import { ReduxStateType } from "../../redux/redux-store"
import { FormDataType, LoginForm,  } from "./LoginForm/LoginForm"

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
       
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    //a unique name
    form: 'login'
})(LoginForm)
const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
