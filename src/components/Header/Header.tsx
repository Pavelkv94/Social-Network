import { NavLink } from 'react-router-dom';
import hed from './Header.module.css';

export function Header(props: any) { //!<<<<<<<<<<<<<<_______________________________________
    return (
        <header className={hed.header}>
            <img src="https://i.ibb.co/yV486Q1/logo.png" alt="Logo" />
            <span className={hed.title}>Free Land</span>

            <div className={hed.loginBlock}>
                {props.isAuth
                    ? <div>{props.email} - <button onClick={props.logout}>LogOut</button></div> :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>)
}


