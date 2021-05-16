import { Field, InjectedFormProps } from "redux-form"

export const LoginForm = (props: InjectedFormProps) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field component="input" placeholder="login" type="text" name="login"/>
            </div>
            <div>
                <Field component="input" placeholder="password" type="password" name="password"/>
            </div>
            <div>
                <Field component="input" type="checkbox" name="remember me"/> remember me
                </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

