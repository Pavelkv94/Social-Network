import { Dispatch } from "react";
import { stopSubmit } from "redux-form";
import { authAPI, ResultCodeENum } from "../api/api";
import { ActionTypes, ThunkType } from "./redux-store";

type PayloadType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}
let initialState = {
    id: null as (number | null),
    login: null as string | null,
    email: null as string | null,
    isAuth: false
}
export type InitialAuthType = typeof initialState;

export type setAuthUserDataType = {
    type: "SOCIAL-NETWORK/AUTH/SET-USER-DATA",
    payload: PayloadType
}

export const authReducer = (state: InitialAuthType = initialState, action: ActionTypes): InitialAuthType => {
    switch (action.type) {
        case "SOCIAL-NETWORK/AUTH/SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            }
        default: return state;
    }
}

export const setAuthUserData = (id: null | number, login: null | string, email: null | string, isAuth: boolean): setAuthUserDataType => ({
    type: "SOCIAL-NETWORK/AUTH/SET-USER-DATA",
    payload: { id, login, email, isAuth }
})

//todo TC
export const getAuthUserDataThunkCreator = (): ThunkType => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.me()
        if (response.resultCode === ResultCodeENum.Success) {
            let { id, login, email } = response.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: Dispatch<ActionTypes>) => {

    let response = await authAPI.login(email, password, rememberMe)
        if (response.resultCode === ResultCodeENum.Success) {
            //@ts-ignore  //!<<<<=================================================== 
            dispatch(getAuthUserDataThunkCreator())
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "Entered data is wrong."
                       dispatch(stopSubmit("login", { _error: message }));
        }
   
}

export const logout = (): ThunkType => async(dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.logout()
        if (response.resultCode === ResultCodeENum.Success) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    
}