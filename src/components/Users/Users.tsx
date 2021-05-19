import { UsersOfSearchType } from '../../redux/usersReducer';
import profileLogo from '../../assets/images/profileLogo.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersOfSearchType
    followingProgress: Array<number | null>
    onPageChanged: (pageNumber: number) => void
    followThunkCreator: (userId: any) => void
    unFollowThunkCreator: (userId: any) => void

}
export function Users(props: UsersType) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
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
                                ? <button
                                    disabled={props.followingProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unFollowThunkCreator(u.id)

                                    }}>UNFOLLOW</button>
                                : <button
                                    disabled={props.followingProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.followThunkCreator(u.id)
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







