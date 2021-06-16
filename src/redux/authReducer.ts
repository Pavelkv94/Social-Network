import { stopSubmit } from "redux-form";
import { authAPI, ResultCodeENum } from "../api/api";
import { ActionTypes, DispatchType, ThunkType } from "./redux-store";

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

export const getAuthUserDataThunkCreator = (): ThunkType => (dispatch: DispatchType) => {
   return  authAPI.me().then(data => {
        if (data.resultCode === ResultCodeENum.Success) {
            let { id, login, email } = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: DispatchType) => {

    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === ResultCodeENum.Success) {
            //@ts-ignore    //!<<<<<<<<<<---------------------------
            dispatch(getAuthUserDataThunkCreator())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Entered data is wrong."
            //@ts-ignore    //!<<<<<<<<<<---------------------------
            dispatch(stopSubmit("login", { _error: message }));
        }
    });
}

export const logout = (): ThunkType => (dispatch: DispatchType) => {
    authAPI.logout().then(data => {
        if (data.resultCode === ResultCodeENum.Success) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}