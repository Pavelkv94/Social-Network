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
}

export function Profile(props: ProfileType) {


  return (
    <div className="container">
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
      />
      <MyPostsContainer />
    </div>
  )
}