import axios from 'axios';
import { connect } from 'react-redux';
import { DispatchType, ReduxStateType } from '../../redux/redux-store';
import { followAC, setCurrentPageAC, setTotalCountAC, setUserAC, unfollowAC, UsersOfSearchType } from '../../redux/usersReducer';
import React from 'react';
import { Users } from './Users';
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


type UsersAPIType = {
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
export class UsersAPiComponent extends React.Component<UsersAPIType>{

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

        return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
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