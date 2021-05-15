import { ProfileDataType } from '../../redux/profileReducer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = {
  profile: ProfileDataType
  status: string
  getUserProfileThunkCreator: (userId: string) => void
  updateStatus: (userId: string) => void
}

export function Profile(props: ProfileType) {
  //console.log(props)

  return (
    <div className="container">
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}