import { ActionTypes, AddPostActionType, UpdatePostActionType } from "./redux-store";

export type PostDataType = {
    id: string
    message: string
    src: string
    likeCount: string
}
export type ProfileDataType = {
    background: string
    ava: string
}
export type ProfileStateType = {
    postData: Array<PostDataType>
    newPostText: string
    profileData: Array<ProfileDataType>
}

let initialState: ProfileStateType = {
    postData: [
        { id: "1", message: "My first post", src: "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg", likeCount: "23" },
        { id: "2", message: "Hey friends!!!", src: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", likeCount: "1" },
        { id: "3", message: "Wow it's cool", src: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", likeCount: "12" },
        { id: "4", message: "very very good job", src: "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg", likeCount: "32" },
        { id: "5", message: "My second post", src: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg", likeCount: "4" },
    ],
    newPostText: "it=kamasutra.com",
    profileData: [
        { background: "https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg", ava: "Ava" }
    ],


}

export const profileReducer = (state: ProfileStateType = initialState, action: ActionTypes): ProfileStateType => {
      switch (action.type) {
        case "ADD-POST":
            let newPost: PostDataType = {
                id: "5",
                message: action.postMessage,
                src: "https://cdn140.picsart.com/330959057057201.jpg",
                likeCount: "0"
            };
            return {
                ...state,
                postData: [...state.postData, newPost], //используем спрэд-оператор вместо push
                newPostText: ""
            }
           
        case "UPDATE-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
           
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