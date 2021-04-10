import { connect } from 'react-redux';
import { DispatchType, ReduxStateType } from '../../redux/redux-store';
import { followAC, setCurrentPageAC, setTotalCountAC, setUserAC, unfollowAC, UsersOfSearchType } from '../../redux/usersReducer';
import { UsersAPiComponent } from './UsersAPiComponent';

type MapStateToPropsType = {
    users: UsersOfSearchType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (usersId: number) => void
    setUsers: (users: UsersOfSearchType) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalUsersCount: number) => void
}
let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};
let mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => { dispatch(followAC(userId)) },
        unfollow: (usersId: number) => { dispatch(unfollowAC(usersId)) },
        setUsers: (users: UsersOfSearchType) => { dispatch(setUserAC(users)) },
        setCurrentPage: (currentPage: number) => { dispatch(setCurrentPageAC(currentPage)) },
        setTotalCount: (totalUsersCount: number) => { dispatch(setTotalCountAC(totalUsersCount)) }

    }
};
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPiComponent);