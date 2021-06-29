import React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { CreateField, GetStringKeys, Input } from './../common/FormsControl/FormControl'
import { requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from './../../redux/authReducer'
import { Redirect } from "react-router-dom";
import style from "./../common/FormsControl/FormControl.module.css"
import { ReduxStateType } from '../../redux/redux-store';

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>
type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({ handleSubmit, error, captchaUrl }) => {
        console.log(captchaUrl)
        return (
            <form onSubmit={handleSubmit}>
                {CreateField("Email", 'email', [requiredField], Input)}
                {CreateField("Password", "password", [requiredField], Input, { type: "password" })}
                {CreateField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && CreateField("Symbols from image", "captcha", [requiredField], Input, {})}


                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}
const mapStateToProps = (state: ReduxStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
