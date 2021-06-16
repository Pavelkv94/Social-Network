import { UsersOfSearchType } from '../../redux/usersReducer';
import style from './Users.module.css'
import { Paginator } from './Paginator'
import { User } from './User/User';

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
            )
        }
    </div>
}







