import { Field, InjectedFormProps } from "redux-form"

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


export const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field component="input" placeholder="login" type="text" name="login"/>
            </div>
            <div>
                <Field component="input" placeholder="password" type="password" name="password"/>
            </div>
            <div>
                <Field component="input" type="checkbox" name="rememberMe"/> remember me
                </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

