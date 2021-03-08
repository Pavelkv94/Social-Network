import React from 'react';
import { ActionTypes, PostDataType, addPostActionCreator, updatePowtTextActionCreator} from '../../../redux/state';
import mypost from './MyPosts.module.css'
import { Post } from './Post/Post';


type MyPostType = {
    posts: Array<PostDataType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}



export function MyPosts(props: MyPostType) {

    const postElement = props.posts.map(p => <Post message={p.message} src={p.src} likeCount={p.likeCount} />)

    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        let text = newPostElement.current?.value; //  newPostElement.current &&  newPostElement.current.value; (Если элемент существует то возьмем его значение)
        if (text) {
            props.dispatch(addPostActionCreator(text))
        };
        props.dispatch(updatePowtTextActionCreator(""))
    }
    const onPostChange = (e: any) => {
        props.dispatch(updatePowtTextActionCreator(e.currentTarget.value))
    }
    // const onPostChange = () => {
    //     let text = newPostElement.current?.value;
    //     props.updateNewPostText(text);
    // }
    return (
        <div className={mypost.block}>
            <h3>My posts</h3>
            <div >
                <div>
                    <textarea className={mypost.area} ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postElement}
        </div>
    )
}