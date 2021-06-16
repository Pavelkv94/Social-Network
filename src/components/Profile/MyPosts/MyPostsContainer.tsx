import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostActionCreator, PostDataType } from '../../../redux/profileReducer';
import { ActionTypes, ReduxStateType } from '../../../redux/redux-store';
import { MyPosts } from './MyPosts';

type MapStateToPropsType = {
    posts: Array<PostDataType>
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
}
let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postData,
    }
};
let mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => { dispatch(addPostActionCreator(newPostText)) },
    };
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);