import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import prof from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = any     //!-----------------<<<<<<<<<<<<<<<

export function Profile(props: ProfileType) {
  console.log(props)
  return (
    <div className="container">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}