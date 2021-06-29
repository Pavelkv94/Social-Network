import { ProfileDataType } from '../../../redux/profileReducer';
import { Preloader } from '../../common/Preloader/Preloader';
import p from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus';
import { Contacts } from './Contacts/Contacts'
import { useState } from 'react';
import { ProfileReduxDataForm } from './ProfileDataForm/ProfileDataForm'
type PropsType = {
  profile: ProfileDataType
  isOwner: boolean
  status: string
  updateStatus: (userId: string) => void
  savePhoto: (e: any) => void
  saveProfile: (formData: ProfileDataType) => any
}


export function ProfileInfo(props: PropsType) {
  let [editMode, setEditMode] = useState<boolean>(false);
  if (!props.profile) { return <Preloader /> }
  // console.log(props)

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const goToEditMode = () => {
    setEditMode(true)
  }

  const onSubmit = (formData: any) => {
    props.saveProfile(formData).then(
      () => { setEditMode(false) }
    )
      .catch(alert('ошибка промис'))


  }



  return (
    <div className={p.content}>
      <img src="https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg" alt="Background" />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <img
        src={props.profile.photos.large
          ? props.profile.photos.large
          : "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"}
        alt="ava"
        style={{ width: "300px", marginLeft: "20px" }}
      />
      {!props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

      {editMode
        //@ts-ignore
        ? <ProfileReduxDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} />
        : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={goToEditMode} />}


    </div>

  )
}

type ProfilerDataType = {
  profile: ProfileDataType
  isOwner: boolean
  goToEditMode: () => void
}

export const ProfileData = ({ profile, isOwner, goToEditMode }: any) => {
  return (<div>
    {!isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
    </div><b>Contacts:</b>
    {//@ts-ignore
      Object.keys(profile?.contacts).map(key => {
        //@ts-ignore
        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}


  </div>)
}
