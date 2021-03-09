import { ActionTypes, PostDataType, ProfileStateType, StateType } from "./state";


export const profileReducer = (state:ProfileStateType, action:ActionTypes)  => {
    if (action.type === "ADD-POST") {
        let newPost: PostDataType = {
            id: "5",
            message: action.postMessage,
            src: "https://cdn140.picsart.com/330959057057201.jpg",
            likeCount: "0"
        }
        state.postData.push(newPost);
    }
    else if (action.type === "UPDATE-POST-TEXT") {
        state.newPostText = action.newText;
    }

    return state;
}