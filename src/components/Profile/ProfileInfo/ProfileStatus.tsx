// import React, { ChangeEvent, ChangeEventHandler, RefObject, useState } from 'react';

// type ProfileStatusType = {
//     status: string
//     updateStatus: (userId: string) => void
// }
// export const ProfileStatus = (props: ProfileStatusType) => {
//     let [edit, setEdit] = useState(false);
//     let [status, setStatus] = useState(props.status)
//     const editMode = () => {
//         setEdit(!edit);
//         props.updateStatus(status);
//     }

//     const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setStatus(e.currentTarget.value);
//     }


//     return (<div>
//         {!edit ?
//             <div onDoubleClick={editMode}>
//                 <span>{props.status || "no status"}</span>
//             </div>
//             :
//             <div>
//                 <input value={status} onBlur={editMode} autoFocus onChange={onStatusChange} />
//             </div>}
//     </div>)
// }

import React, { ChangeEvent } from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}
class ProfileStatus extends React.Component<ProfileStatusType> {
    state:StateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: any, prevState: StateType) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }

        console.log("componentDidUpdate")
    }

    render() {
        console.log("render")
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;