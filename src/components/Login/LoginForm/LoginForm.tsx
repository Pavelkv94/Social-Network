import { Field, InjectedFormProps } from "redux-form"
import { requiredField } from "../../../utils/validators/validators"
import { CreateField, Input } from "../../common/FormsControl/FormControl"
import s from "./../../common/FormsControl/FormControl.module.css"

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {CreateField("Email", "text", "email", [requiredField])}
            {CreateField("password", "password", "password", [requiredField])}
            {CreateField("", "checkbox", "rememberMe", "", "remember me")}
{/*             
            <div>
                <Field
                    component={Input}
                    placeholder="Email"
                    type="text"
                    name="email"
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    placeholder="password"
                    type="password"
                    name="password"
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    placeholder=""
                    type="checkbox"
                    name="rememberMe"
                /> remember me
            </div> */}
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

