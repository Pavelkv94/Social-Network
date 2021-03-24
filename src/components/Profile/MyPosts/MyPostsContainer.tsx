import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import { ReduxStoreType } from '../../../redux/redux-store';
import { MyPosts } from './MyPosts';

type MyPostContainerType = {
    store: ReduxStoreType
}

export function MyPostsContainer(props: MyPostContainerType) {
    let state = props.store.getState();
    const addPost = (text: string) => {
        props.store.dispatch(addPostActionCreator(text))
    }
    const onPostChange = (body: string) => {
        props.store.dispatch(updatePostTextActionCreator(body))
    }

    return (
        <MyPosts
            posts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updatePost={onPostChange}
        />
    )
}