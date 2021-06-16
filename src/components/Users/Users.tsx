import { UsersOfSearchType } from '../../redux/usersReducer';
import profileLogo from '../../assets/images/profileLogo.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { Paginator } from './Paginator'
import { User } from './User';

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersOfSearchType
    followingProgress: Array<number | null>
    onPageChanged: (pageNumber: number) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void

}
export function Users(props: UsersType) {
    return <div className={style.container}>
        <Paginator
            currentPage={props.currentPage}
            pageSize={props.pageSize}
            totalUsersCount={props.totalUsersCount}
            onPageChanged={props.onPageChanged} />
        {
            props.users.map(u => <User
                user={u}
                followingProgress={props.followingProgress}
                followThunkCreator={props.followThunkCreator}
                unFollowThunkCreator={props.unFollowThunkCreator}
            />
                // <div key={u.id} className={style.userInfo}>
                //     <span>
                //         <div>
                //             <NavLink to={`/profile/${u.id}`}>
                //                 <img src={u.photos.small != null ? u.photos.small : profileLogo} alt="avatar" className={style.userLogo} />
                //             </NavLink>
                //         </div>
                //         <div>
                //             {u.followed
                //                 ? <button
                //                     disabled={props.followingProgress.some(id => id === u.id)}
                //                     onClick={() => {
                //                         props.unFollowThunkCreator(u.id)

                //                     }}>UNFOLLOW</button>
                //                 : <button
                //                     disabled={props.followingProgress.some(id => id === u.id)}
                //                     onClick={() => {
                //                         props.followThunkCreator(u.id)
                //                     }}>FOLLOW</button>
                //             }
                //         </div>
                //     </span>
                //     <span>
                //         <span>
                //             <div>{u.name}</div>
                //             <div>{u.status}</div>
                //         </span>
                //         <span>
                //             <div>{'u.location.city'}</div>
                //             <div>{'u.location.country'}</div>
                //         </span>
                //     </span>
                // </div>
            )
        }
    </div>
}







