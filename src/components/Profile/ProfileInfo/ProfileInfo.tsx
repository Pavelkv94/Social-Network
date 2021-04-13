import React from 'react';
import { ProfileDataType } from '../../../redux/profileReducer';
import p from './ProfileInfo.module.css'




export function ProfileInfo(props: ProfileDataType) {
  if(!props.profile) {return <h1>qqqqqqqqqqqqq</h1>}
  console.log(props)
  return (
    <div className={p.content}>
      <img src="https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg" alt="Background" />
      <div>AVA </div>
      <img src={props.profile.photos.large} alt="ava" />
    </div>
  )
}