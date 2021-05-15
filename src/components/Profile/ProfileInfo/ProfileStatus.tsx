import React, { ChangeEvent, ChangeEventHandler, RefObject, useState } from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (userId: string) => void
}
export const ProfileStatus = (props: ProfileStatusType) => {
    let [edit, setEdit] = useState(false);
    let [status, setStatus] = useState(props.status)
    const editMode = () => {
        setEdit(!edit);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }


    return (<div>
        {!edit ?
            <div onDoubleClick={editMode}>
                <span>{props.status || "no status"}</span>
            </div>
            :
            <div>
                <input value={status} onBlur={editMode} autoFocus onChange={onStatusChange} />
            </div>}
    </div>)
}