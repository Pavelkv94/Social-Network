import React from 'react';
import { ProfileDataType } from '../../../redux/store';
import p from './ProfileInfo.module.css'



  
  export function ProfileInfo(props: ProfileDataType) {
    return (
      <div className={p.content}>
        <img src={props.background} alt="" />
        <div>{props.ava} </div>
      </div>
    )
  }