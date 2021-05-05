import d from "./../Dialogs.module.css"


export type MessageType = {
    mes: string
}

export function Message(props: MessageType) {
    return (
        <div className={d.message}>{props.mes}</div>
    )
}

