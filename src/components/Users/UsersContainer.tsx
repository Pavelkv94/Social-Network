import React from 'react';
import { connect } from 'react-redux';
import { DispatchType, ReduxStateType } from '../../redux/redux-store';
import { followAC, setUserAC, unfollowAC, UsersOfSearchType } from '../../redux/usersReducer';
import { Users } from './Users';

type MapStateToPropsType = {
    users: UsersOfSearchType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (usersId: number) => void
    setUsers: (users: UsersOfSearchType) => void
}
let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => { dispatch(followAC(userId)) },
        unfollow: (usersId: number) => { dispatch(unfollowAC(usersId)) },
        setUsers: (users: UsersOfSearchType) => { dispatch(setUserAC(users)) }

    }
};
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);