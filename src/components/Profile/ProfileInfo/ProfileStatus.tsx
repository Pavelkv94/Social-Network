import React, { ChangeEvent, useState } from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (userId: string) => void
}
export const ProfileStatus = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateMode = () => { setEditMode(true) }

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || "-------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    )
}

// import React, { ChangeEvent } from 'react';

// type ProfileStatusType = {
//     status: string
//     updateStatus: (status: string) => void
// }

// type StateType = {
//     editMode: boolean
//     status: string
// }
// class ProfileStatus extends React.Component<ProfileStatusType> {
//     state: StateType = {
//         editMode: false,
//         status: this.props.status
//     }

//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         });
//     }
//     deactivateEditMode() {
//         this.setState({
//             editMode: false
//         });
//         this.props.updateStatus(this.state.status);
//     }

//     onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//             status: e.currentTarget.value
//         });
//     }

//     componentDidUpdate(prevProps: ProfileStatusType, prevState: StateType) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             });
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                     <div>
//                         <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
//                     </div>
//                 }
//                 {this.state.editMode &&
//                     <div>
//                         <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

// export default ProfileStatus;