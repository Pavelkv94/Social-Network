import axios from 'axios';
import React from 'react';
import { UsersOfSearchType } from '../../redux/usersReducer';
import profileLogo from '../../assets/images/profileLogo.png'
import style from './Users.module.css'

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersOfSearchType
    follow: (userId: number) => void,
    unfollow: (usersId: number) => void
    setUsers: (users: UsersOfSearchType) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalUsersCount: number) => void
}
export class Users extends React.Component<UsersType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div className={style.container}>
            <div>
                {pages.map(p => {
                    return <span
                        className={this.props.currentPage === p ? style.selected : ""}
                        onClick={() => this.onPageChanged(p)}
                    >{p}</span>
                })}

            </div>
            {
                this.props.users.map(u =>
                    <div key={u.id} className={style.userInfo}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : profileLogo} alt="avatar" className={style.userLogo} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>UNFOLLOW</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button>
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
}






