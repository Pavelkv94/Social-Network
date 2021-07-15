import { Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import { profileAPI, ResultCodeENum, usersAPI } from "../api/api";
import { ActionTypes, ThunkType } from "./redux-store";
export type ContactsType = {
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
    "fullName": string | null
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
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>
export type SavePhotosType = ReturnType<typeof savePhotoAC>

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
        case "SOCIAL-NETWORK/PROFILE/SAVE-PHOTO":
            return {
                ...state,
                //@ts-ignore
                profileData: { ...state.profileData, photos: action.photos }
            }
        default: return state;
    }
}

//TODO----------------------создаем ACTION-CREATORS----------
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "SOCIAL-NETWORK/PROFILE/ADD-POST",
        postMessage: newPostText
    } as const
}
export const setUserProfile = (profile: ProfileDataType) => {
    return {
        type: "SOCIAL-NETWORK/PROFILE/SET-USER-PROFILE",
        profile,
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: "SOCIAL-NETWORK/PROFILE/SET-STATUS",
        status,
    } as const
}
export const savePhotoAC = (photos: PhotosType) => {
    return {
        type: "SOCIAL-NETWORK/PROFILE/SAVE-PHOTO",
        photos
    } as const
}



//TODO----------------------создаем Thunk-CREATORS----------

export const getUserProfileThunkCreator = (userId: number | null) =>
    async (dispatch: Dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
        debugger
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

export const savePhotoTC = (file: File): ThunkType =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === ResultCodeENum.Success) {
            dispatch(savePhotoAC(response.data.data.photos));
        }
    }

export const saveProfileTC = (profile: ProfileDataType): ThunkType =>
    async (dispatch: Dispatch<ActionTypes>, getState) => {
        const userId = getState().auth.id
        let response = await profileAPI.saveProfile(profile)
        debugger
        if (response.data.resultCode === 0) {
            //@ts-ignore            //!<========================================
            dispatch(getUserProfileThunkCreator(userId))
        } else {
            dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }

    }
