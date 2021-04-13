import React from 'react';
import { ProfileDataType } from '../../../redux/profileReducer';
import p from './ProfileInfo.module.css'




export function ProfileInfo(props: ProfileDataType) {
  return (
    <div className={p.content}>
      <img src="https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg" alt="" />
      <div>AVA </div>
    </div>
  )
}