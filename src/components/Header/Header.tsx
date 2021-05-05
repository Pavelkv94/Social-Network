import { NavLink } from 'react-router-dom';
import hed from './Header.module.css';

export function Header(props: any) {
    return (
        <header className={hed.header}>
            <img src="https://i.ibb.co/yV486Q1/logo.png" alt="Logo" />
            <span className={hed.title}>Free Land</span>
            <div className={hed.loginBlock}>
                {props.isAuth ? props.email :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>)
}


