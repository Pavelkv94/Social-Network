import { ContactsType } from "../../../../redux/profileReducer"


export const Contacts = ({ contactTitle, contactValue }: any) => {
    return (<div>
<b>{contactTitle}</b> : {contactValue}
    </div>)
}