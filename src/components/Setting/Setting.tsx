import { ChangeEventHandler } from "react"

type SettingProps = {
    savePhoto: (file: any) => void
}

export function Setting(props: any) {
    debugger
    const onMainPhotoSelected = (e:any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }


    return (
        <div>
            Setting
            <div>
                Change photos
                <input type="file" onChange={onMainPhotoSelected} />
            </div>
        </div>
    )
}