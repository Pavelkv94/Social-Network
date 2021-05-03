import React, { useState } from 'react';
import p from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
}
export const ProfileStatus = (props: ProfileStatusType) => {
    let [edit, setEdit] = useState(false);
    const editMode = ()=>{
        setEdit(!edit)
    }

    return (<div>
        {!edit ?
            <div onDoubleClick={editMode}>
                <span>{props.status}</span>
            </div>
            :
            <div>
                <input value={props.status} onBlur={editMode} autoFocus/>
            </div>}
    </div>)
}