import { UserOfSearchType, UsersOfSearchType } from '../../redux/usersReducer';
import profileLogo from '../../assets/images/profileLogo.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { Paginator } from './Paginator'

type UserPropsType = {
    user: UserOfSearchType
    followingProgress: Array<number | null>
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void

}
export function User(props: UserPropsType) {

    let u = props.user;
    return (<div key={u.id} className={style.userInfo}>
        <span>
            <div>
                <NavLink to={`/profile/${u.id}`}>
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







