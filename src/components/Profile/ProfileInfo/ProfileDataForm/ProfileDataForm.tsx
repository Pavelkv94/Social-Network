import { reduxForm } from "redux-form"
import { CreateField, Input, Textarea } from './../../../common/FormsControl/FormControl'
import style from './../../../common/FormsControl/FormControl.module.css'

const ProfileDataForm = ({ profile, handleSubmit, error }: any) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {CreateField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {CreateField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>

        <div>
            <b>My professional skills</b>:
            {CreateField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>


        <div>
            <b>About me</b>:
            {CreateField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {CreateField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form>
}

export const ProfileReduxDataForm = reduxForm<any>({ form: 'edit-profile' })(ProfileDataForm)