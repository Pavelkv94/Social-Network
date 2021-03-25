import React from 'react';
import {  store } from '../../redux/redux-store'; // IMPORT STORE HAS BEEN DELETED
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import prof from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = {
 // store: ReduxStoreType
}

export function Profile(props: ProfileType) {
  let state = store.getState();
  return (
    <div className="container">
      <ProfileInfo background={state.profilePage.profileData[0].background} ava={state.profilePage.profileData[0].ava} /> 
      <MyPostsContainer />
    </div>
  )
}