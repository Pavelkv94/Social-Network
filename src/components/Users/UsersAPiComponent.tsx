import axios from 'axios';
import React from 'react';
import { UsersOfSearchType } from '../../redux/usersReducer';
import { Users } from './Users';

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






