import { reduxForm } from "redux-form"
import { LoginForm } from "./LoginForm/LoginForm"

export const Login = (props: any) => {

const onSubmit = (formData:any)=>{
    console.log(formData)
}
    return (
        <div>
            <h1>LOGINNNNN</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    //a unique name
    form: 'login'
}) (LoginForm)