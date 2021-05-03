import { connect } from 'react-redux';
import { ReduxStateType } from '../../redux/redux-store';
import {
    followSuccess, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollowSuccess, UsersOfSearchType, toggleIsFollowingProgress, getUsersThunkCreator, followThunkCreator,
    unFollowThunkCreator
} from '../../redux/usersReducer';
import React from 'react';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


type MapStateToPropsType = {
    users: UsersOfSearchType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number | null>
}
// type MapDispatchToPropsType = {
//     follow: (userId: number) => void,
//     unfollow: (usersId: number) => void
//     setUsers: (users: UsersOfSearchType) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalCount: (totalUsersCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }


type UsersAPIType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersOfSearchType
    isFetching: boolean
    followingProgress: Array<number | null>
    // followSuccess: (userId: number) => void,
    // unfollowSuccess: (usersId: number) => void
    //setUsers: (users: UsersOfSearchType) => void
    setCurrentPage: (currentPage: number) => void
    //setTotalCount: (totalUsersCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFollowing: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: any) => void
    unFollowThunkCreator: (userId: any) => void

}
export class UsersAPiComponent extends React.Component<UsersAPIType>{

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        //Этот код мы отправили в санки
        // this.props.toggleIsFetching(true)

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        // });
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                //followSuccess={this.props.followSuccess}
                //unfollowSuccess={this.props.unfollowSuccess}
                // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingProgress={this.props.followingProgress}
                followThunkCreator={this.props.followThunkCreator}
                unFollowThunkCreator={this.props.unFollowThunkCreator}

            />
        </>
    }
}

let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingInProgress
    }
};
// let mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => { dispatch(followAC(userId)) },
//         unfollow: (usersId: number) => { dispatch(unfollowAC(usersId)) },
//         setUsers: (users: UsersOfSearchType) => { dispatch(setUserAC(users)) },
//         setCurrentPage: (currentPage: number) => { dispatch(setCurrentPageAC(currentPage)) },
//         setTotalCount: (totalUsersCount: number) => { dispatch(setTotalCountAC(totalUsersCount)) },
//         toggleIsFetching: (isFetching: boolean) => { dispatch(toggleIsFetchingAC(isFetching)) }

//     }
// };



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        toggleIsFollowingProgress,
        //?--thunk
        getUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator,
    })
)(UsersAPiComponent)
