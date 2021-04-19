import React from 'react';
import { UsersOfSearchType } from '../../redux/usersReducer';
import profileLogo from '../../assets/images/profileLogo.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersOfSearchType
    follow: (userId: number) => void,
    unfollow: (usersId: number) => void
    onPageChanged: (pageNumber: number) => void
}
export function Users(props: UsersType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    //for (let i = 1; i <= pagesCount; i++) {
    for (let i = Math.max(props.currentPage - 5, 1); i <= Math.max(1, Math.min(props.currentPage + 5, pagesCount)); i++) {
        pages.push(i)
    }
    return <div className={style.container}>
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p ? style.selected : style.paginat}
                    onClick={() => props.onPageChanged(p)}
                >{p}</span>
            })}

        </div>
        {
            props.users.map(u =>
                <div key={u.id} className={style.userInfo}>
                    <span>
                        <div>
                            <NavLink to={`/profile/ + ${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : profileLogo} alt="avatar" className={style.userLogo} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    //Delete принимает 2 параметра, сначала url адресс запроса потом параметры запроса
                                    //headers: {"API-KEY": "92cf59a3-3b12-407b-a573-626b86aed9d2"} - ключ запроса (берется с сервера)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true, headers: {"API-KEY": "92cf59a3-3b12-407b-a573-626b86aed9d2"}  }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });

                                }}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    //post принимает 3 параметра, сначала url адресс запроса , потом обьект, потом параметры запроса
                                     //headers: {"API-KEY": "92cf59a3-3b12-407b-a573-626b86aed9d2"} - ключ запроса (берется с сервера)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true, headers: {"API-KEY": "92cf59a3-3b12-407b-a573-626b86aed9d2"} }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });


                                }}>FOLLOW</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)
        }
    </div>
}







