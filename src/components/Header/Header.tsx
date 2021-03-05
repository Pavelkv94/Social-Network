import React from 'react';
import hed from './Header.module.css';

export function Header(props:any) {
    return (
        <header className={hed.header}>
            <img src="https://i.ibb.co/yV486Q1/logo.png" alt="Logo" />
            <span className = {hed.title}>Free Land</span>
        </header>)
}


