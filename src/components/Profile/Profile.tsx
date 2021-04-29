import React from 'react';
import { ProfileDataType } from '../../redux/profileReducer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import prof from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = {
  profile: ProfileDataType
  isAuth: boolean
  getUserProfileThunkCreator: (userId: string) => void
}

export function Profile(props: ProfileType) {
  console.log(props)
  
  return (
    <div className="container">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}