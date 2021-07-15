import { Dispatch } from "react";
import { stopSubmit } from "redux-form";
import { authAPI, ResultCodeENum, securityAPI } from "../api/api";
import { ActionTypes, ThunkType } from "./redux-store";


let initialState = {
    id: null as (number | null),
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null// if null, then captcha is not required
}
export type InitialAuthType = typeof initialState;

export type CapthaType = ReturnType<typeof getCaptchaUrlSuccess>
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: InitialAuthType = initialState, action: ActionTypes): InitialAuthType => {
    switch (action.type) {
        case "SOCIAL-NETWORK/AUTH/SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            }
        case 'SOCIAL-NETWORK/AUTH/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}


export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: 'SOCIAL-NETWORK/AUTH/GET_CAPTCHA_URL_SUCCESS',
    payload: { captchaUrl }
} as const)
export const setAuthUserData = (id: null | number, login: null | string, email: null | string, isAuth: boolean) => ({
    type: "SOCIAL-NETWORK/AUTH/SET-USER-DATA",
    payload: { id, login, email, isAuth }
} as const)

//todo TC
export const getAuthUserDataThunkCreator = (): ThunkType => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.me()
    if (response.resultCode === ResultCodeENum.Success) {
        let { id, login, email } = response.data;
        dispatch(setAuthUserData(id, login, email, true));
    }

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodeENum.Success) {
        // success, get auth data
        dispatch(getAuthUserDataThunkCreator())
    } else {
        if (data.resultCode === ResultCodeENum.captcha) {
            dispatch(getCaptchaUrl());
        }

        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logout = (): ThunkType => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.logout()
    if (response.resultCode === ResultCodeENum.Success) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}