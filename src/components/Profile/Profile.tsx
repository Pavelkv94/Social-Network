import React from 'react';
import { PostDataType, ProfileDataType } from '../../redux/profileReducer';
import { ActionTypes } from '../../redux/redux-store';
import { MyPosts } from './MyPosts/MyPosts';
import prof from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = {
  postData: Array<PostDataType>
  newPostText: string
  profileData: Array<ProfileDataType>
  dispatch: (action: ActionTypes) => void
}


export function Profile(props: ProfileType) {

  return (
    <div className="container">
      <ProfileInfo background={props.profileData[0].background} ava={props.profileData[0].ava} />
      <MyPosts posts={props.postData} newPostText={props.newPostText} dispatch={props.dispatch} />
    </div>
  )
}