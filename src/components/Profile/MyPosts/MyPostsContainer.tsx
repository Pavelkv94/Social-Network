import { connect } from 'react-redux';
import { addPostActionCreator, PostDataType, updatePostTextActionCreator } from '../../../redux/profileReducer';
import { DispatchType, ReduxStateType } from '../../../redux/redux-store';
import { MyPosts } from './MyPosts';

type MapStateToPropsType = {
    posts: Array<PostDataType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
    updatePost: (body: string) => void
}
let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
    addPost: (text: string) => { dispatch(addPostActionCreator(text)) },
    updatePost: (body: string) => { dispatch(updatePostTextActionCreator(body)) }}
};
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);