import { Dispatch } from "redux";
import { profileAPI, ResultCodeENum, usersAPI } from "../api/api";
import { ActionTypes, ThunkType } from "./redux-store";
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
    profileData: ProfileDataType
    status: string
}
export type AddPostActionType = {
    type: "SOCIAL-NETWORK/PROFILE/ADD-POST"
    postMessage: string
}
export type SetUserProfileType = {
    type: "SOCIAL-NETWORK/PROFILE/SET-USER-PROFILE",
    profile: ProfileDataType
}
export type SetStatusType = {
    type: "SOCIAL-NETWORK/PROFILE/SET-STATUS"
    status: string
}

let initialState: ProfileStateType = {
    postData: [
        { id: "1", message: "My first post", src: "https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg", likeCount: "23" },
        { id: "2", message: "Hey friends!!!", src: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg", likeCount: "12" },
        { id: "4", message: "very very good job", src: "https://pictureholiday.ru/wp-content/uploads/2018/05/lrdh7n2l4l0.jpg", likeCount: "32" },
        { id: "5", message: "My second post", src: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg", likeCount: "4" },
    ],
    profileData: null,
    status: "",
}

export const profileReducer = (state: ProfileStateType = initialState, action: ActionTypes): ProfileStateType => {
    switch (action.type) {
        case "SOCIAL-NETWORK/PROFILE/ADD-POST":
            let newPost: PostDataType = {
                id: "5",
                message: action.postMessage,
                src: "https://lh3.googleusercontent.com/proxy/3rJu_amx5VvIAQOWhgcizmF3sYMiZ1CeLWGXAmDmlITG_ZUxNXKHCBkBQWo0rTkebuBkxOs5bgKaU4m_SWFiaDRobK1AzfC4LHulca3hMn3YvJxPGKEeNEEzmpsPn2eY3Nw65qUUIn4E1TYLp4o8ABQsDB13jFsjyYB_S_K937soqhA_7_UUmvwOUYkJe8MiFNt4BPHHHMQ9PKnCrM8lInd98DtLPWGpnYCGDZLkAvogYT9xFeS72g22w50XtttvfpsvdsxG",
                likeCount: "0"
            };
            return {
                ...state,
                postData: [...state.postData, newPost], //используем спрэд-оператор вместо push
            }
        case "SOCIAL-NETWORK/PROFILE/SET-USER-PROFILE":
            return {
                ...state,
                profileData: action.profile
            }
        case "SOCIAL-NETWORK/PROFILE/SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        default: return state;
    }
}

//TODO----------------------создаем ACTION-CREATORS----------
export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: "SOCIAL-NETWORK/PROFILE/ADD-POST",
        postMessage: newPostText
    }
}


export const setUserProfile = (profile: ProfileDataType): SetUserProfileType => {
    return {
        type: "SOCIAL-NETWORK/PROFILE/SET-USER-PROFILE",
        profile,
    }
}

export const setStatus = (status: string): SetStatusType => {
    return {
        type: "SOCIAL-NETWORK/PROFILE/SET-STATUS",
        status,
    }
}


//TODO----------------------создаем Thunk-CREATORS----------

export const getUserProfileThunkCreator = (userId: number | null): ThunkType =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
export const getUserStatus = (userId: number | null): ThunkType =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }

export const updateUserStatus = (status: string): ThunkType =>
    async (dispatch: Dispatch<ActionTypes>) => {
        try {
            let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === ResultCodeENum.Success) {
                dispatch(setStatus(status));
            }
        }
        //!test
        catch {
            console.log('ERROR')
        }
    }
