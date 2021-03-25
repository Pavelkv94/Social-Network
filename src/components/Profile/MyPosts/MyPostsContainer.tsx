import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import { ReduxStoreType, store } from '../../../redux/redux-store';
import { StoreContext } from '../../../StoreContext';
import { MyPosts } from './MyPosts';

type MyPostContainerType = {
    //store: ReduxStoreType
}

export function MyPostsContainer(props: MyPostContainerType) {

    return (
        <StoreContext.Consumer>
            {//!фигурная скобка с новой строки
                (store: ReduxStoreType) => {
                    let state = store.getState();
                    const addPost = (text: string) => {
                        store.dispatch(addPostActionCreator(text))
                    }
                    const onPostChange = (body: string) => {
                        store.dispatch(updatePostTextActionCreator(body))
                    }
                    return (<MyPosts
                        posts={state.profilePage.postData}
                        newPostText={state.profilePage.newPostText}
                        addPost={addPost}
                        updatePost={onPostChange}
                    />)
                }
            }</StoreContext.Consumer>
    )
}