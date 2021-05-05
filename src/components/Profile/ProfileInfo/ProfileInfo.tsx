import { ProfileDataType } from '../../../redux/profileReducer';
import { Preloader } from '../../common/Preloader/Preloader';
import p from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus';

type PropsType = {
  profile: ProfileDataType
}


export function ProfileInfo(props: PropsType) {
  if (!props.profile) { return <Preloader /> }
  //console.log(props)
  return (
    <div className={p.content}>
      <img src="https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg" alt="Background" />
      <ProfileStatus status={"Hello world"} />
      <div>AVA </div>
      <img src={props.profile.photos.large} alt="ava" style={{ width: "300px", marginLeft: "20px" }} />
    </div>
  )
}