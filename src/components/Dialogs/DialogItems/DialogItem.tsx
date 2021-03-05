import React from 'react';
import { NavLink } from 'react-router-dom';
import d from "./../Dialogs.module.css"



type DialogItemType = {
    id: string
    name: string
}

export function DialogItem(props: DialogItemType) {
    return (
        <div className={`${d.dialog} ${d.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}