import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { login } from "../../redux/authReducer"
import { FormDataType, LoginForm } from "./LoginForm/LoginForm"

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        // console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h1>LOGINNNNN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    //a unique name
    form: 'login'
})(LoginForm)


export default connect(null, { login })(Login);