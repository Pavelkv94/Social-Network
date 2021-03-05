import React from 'react';
import { ProfileType } from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import prof from './Profile.module.css'
import { ProfileInfo} from './ProfileInfo/ProfileInfo';




export function Profile(props: ProfileType) {
  return (
    <div className="container">
      <ProfileInfo background={props.profileData[0].background} ava={props.profileData[0].ava} />
      <MyPosts posts={props.postData} addPost = {props.addPost} newPostText = {props.newPostText} updateNewPostText = {props.updateNewPostText}/>
    </div>
  )
}