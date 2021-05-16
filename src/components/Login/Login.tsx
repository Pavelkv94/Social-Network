import { reduxForm } from "redux-form"
import { FormDataType, LoginForm } from "./LoginForm/LoginForm"

export const Login = () => {

const onSubmit = (formData:FormDataType)=>{
    console.log(formData)
}
    return (
        <div>
            <h1>LOGINNNNN</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    //a unique name
    form: 'login'
}) (LoginForm)