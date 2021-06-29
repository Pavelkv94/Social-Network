import { Field, InjectedFormProps } from "redux-form"
import { requiredField } from "../../../utils/validators/validators"
import { CreateField, Input } from "../../common/FormsControl/FormControl"
import s from "./../../common/FormsControl/FormControl.module.css"

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginForm = ({ handleSubmit, error }: any) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Email", "email", [requiredField], Input)}
            {CreateField("Password", "password", [requiredField], Input, { type: "password" })}
            {CreateField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

