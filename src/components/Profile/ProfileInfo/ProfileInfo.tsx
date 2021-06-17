import { ProfileDataType } from '../../../redux/profileReducer';
import { Preloader } from '../../common/Preloader/Preloader';
import p from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus';
//import { ProfileStatus } from './ProfileStatus';

type PropsType = {
  profile: ProfileDataType
  status: string
  updateStatus: (userId: string) => void
}


export function ProfileInfo(props: PropsType) {
  if (!props.profile) { return <Preloader /> }
  // console.log(props)
  return (
    <div className={p.content}>
      <img src="https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg" alt="Background" />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div>AVA </div>
      <img 
      src={props.profile.photos.large 
      ? props.profile.photos.large 
      : "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"} 
      alt="ava" 
      style={{ width: "300px", marginLeft: "20px" }} 
      />
    </div>
  )
}