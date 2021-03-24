import React from 'react';
import { ReduxStoreType } from '../../redux/redux-store';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import prof from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = {
  store: ReduxStoreType
}

export function Profile(props: ProfileType) {
  let state = props.store.getState();
  return (
    <div className="container">
      <ProfileInfo background={state.profilePage.profileData[0].background} ava={state.profilePage.profileData[0].ava} />
      <MyPostsContainer store={props.store} />
    </div>
  )
}