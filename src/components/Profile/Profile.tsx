import { ProfileDataType } from '../../redux/profileReducer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = {
  profile: ProfileDataType
  isOwner: boolean
  status: string
  getUserProfileThunkCreator: (userId: number | null) => void
  updateStatus: (status: string) => void
  savePhoto: (e: any) => void
  saveProfile: (formData: ProfileDataType) => any
}

export function Profile(props: ProfileType) {


  return (
    <div className="container">
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
        isOwner={props.isOwner}
      />
      <MyPostsContainer />
    </div>
  )
}