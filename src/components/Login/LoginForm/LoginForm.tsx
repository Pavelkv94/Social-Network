import { Field, InjectedFormProps } from "redux-form"
import { requiredField } from "../../../utils/validators/validators"
import { Input } from "../../common/FormsControl/FormControl"

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


export const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field
                    component={Input}
                    placeholder="login"
                    type="text"
                    name="login"
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field component={Input}
                    placeholder="password"
                    type="password"
                    name="password"
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    type="checkbox"
                    name="rememberMe"
                /> remember me
                </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

