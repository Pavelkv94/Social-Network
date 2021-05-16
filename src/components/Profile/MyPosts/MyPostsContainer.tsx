import { connect } from 'react-redux';
import { addPostActionCreator, PostDataType } from '../../../redux/profileReducer';
import { DispatchType, ReduxStateType } from '../../../redux/redux-store';
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
let mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => { dispatch(addPostActionCreator(newPostText)) },
    };
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);