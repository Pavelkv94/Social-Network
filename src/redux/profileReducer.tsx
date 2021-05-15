import { profileAPI, usersAPI } from "../api/api";
import { ActionTypes, DispatchType } from "./redux-store";
type ContactsType = {
    "facebook": string | null
    "website": string | null
    "vk": string | null
    "twitter": string | null
    "instagram": string | null
    "youtube": string | null
    "github": string | null
    "mainLink": string | null
}
type PhotosType = {
    "small": string
    "large": string
}
export type ProfileDataType = {
    "aboutMe": string | null
    "contacts": ContactsType
    "lookingForAJob": boolean
    "lookingForAJobDescription": string | null
    "fullName": string
    "userId": number
    "photos": PhotosType
} | null
export type PostDataType = {
    id: string
    message: string
    src: string
    likeCount: string
}
export type ProfileStateType = {
    postData: Array<PostDataType>
    newPostText: string
    profileData: ProfileDataType
    status: string
}
export type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}
// export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdatePostActionType = {
    type: "UPDATE-POST-TEXT"
    newText: string
}
export type SetUserProfileType = {
    type: "SET-USER-PROFILE",
    profile: ProfileDataType
}
export type SetStatusType = {
    type: "SET-STATUS"
    status: string
}

let initialState: ProfileStateType = {
    postData: [
        { id: "1", message: "My first post", src: "https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg", likeCount: "23" },
        { id: "2", message: "Hey friends!!!", src: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg", likeCount: "12" },
        { id: "4", message: "very very good job", src: "https://lh3.googleusercontent.com/proxy/RqAvSoYAmNP0F1MEhQV9ZgwTX4rxVUWToq68lzomZ9MBM0bbIRm5bSLY74w8pz2ccpwuuGGBUCb0kwwZofYuWMyTfL1D5asYWMEV0jIYKdz6w6Uj70palMXJAUmTSL_q-FuTA802COPQYA9_gWKU9OQhhqN2KbPl3Fj2-FeyRg", likeCount: "32" },
        { id: "5", message: "My second post", src: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg", likeCount: "4" },
    ],
    newPostText: "it=kamasutra.com",
    profileData: null,
    status: "",

}

export const profileReducer = (state: ProfileStateType = initialState, action: ActionTypes): ProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostDataType = {
                id: "5",
                message: action.postMessage,
                src: "https://lh3.googleusercontent.com/proxy/3rJu_amx5VvIAQOWhgcizmF3sYMiZ1CeLWGXAmDmlITG_ZUxNXKHCBkBQWo0rTkebuBkxOs5bgKaU4m_SWFiaDRobK1AzfC4LHulca3hMn3YvJxPGKEeNEEzmpsPn2eY3Nw65qUUIn4E1TYLp4o8ABQsDB13jFsjyYB_S_K937soqhA_7_UUmvwOUYkJe8MiFNt4BPHHHMQ9PKnCrM8lInd98DtLPWGpnYCGDZLkAvogYT9xFeS72g22w50XtttvfpsvdsxG",
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
        case "SET-USER-PROFILE":
            return {
                ...state,
                profileData: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
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
const setUserProfile = (profile: ProfileDataType): SetUserProfileType => {
    return {
        type: "SET-USER-PROFILE",
        profile,
    }
}
export const setStatus = (status: string): SetStatusType => {
    return {
        type: "SET-STATUS",
        status: status
    }
}


//TODO----------------------создаем Thunk-CREATORS----------

export const getUserProfileThunkCreator = (userId: string) =>
    (dispatch: DispatchType) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }

    export const getStatus = (userId: string) =>
    (dispatch: DispatchType) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }

