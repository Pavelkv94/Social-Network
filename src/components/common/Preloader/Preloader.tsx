import React from 'react';
import style from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

export function Preloader() {
    return (
        <div className={style.preloader}>
            <img src={preloader} />
        </div>
    )
}