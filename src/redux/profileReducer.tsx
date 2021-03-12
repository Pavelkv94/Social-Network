import { ActionTypes, AddPostActionType, PostDataType, ProfileStateType, StateType, UpdatePostActionType } from "./store";


export const profileReducer = (state: ProfileStateType, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostDataType = {
                id: "5",
                message: action.postMessage,
                src: "https://cdn140.picsart.com/330959057057201.jpg",
                likeCount: "0"
            };
            state.postData.push(newPost);
            return state;
        case "UPDATE-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

//TODO----------------------создаем ACTION-CREATORS----------
export const addPostActionCreator = (text: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postMessage: text
    }
}
export const updatePostTextActionCreator = (newText: string): UpdatePostActionType => {
    return {
        type: "UPDATE-POST-TEXT",
        newText: newText
    }
}