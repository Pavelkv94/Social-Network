import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { PostDataType } from '../../../redux/profileReducer';
import mypost from './MyPosts.module.css'
import { Post } from './Post/Post';

type MyPostType = {
    posts: Array<PostDataType>
    addPost: (text: string) => void

}

type NewPostType = {
    newPost: string
}


export function MyPosts(props: MyPostType) {

    const postElement = props.posts.map(p => <Post message={p.message} src={p.src} likeCount={p.likeCount} key={p.id} />)

    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = (values: NewPostType) => {
        props.addPost(values.newPost)
    }


    return (
        <div className={mypost.block}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost} />
            {postElement}
        </div>
    )
}


const AddNewPostForm = (props: InjectedFormProps<NewPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPost" placeholder="Enter your post" />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<NewPostType>({ form: "addNewPost" })(AddNewPostForm)
