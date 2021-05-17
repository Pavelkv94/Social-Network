import { authAPI } from "../api/api";
import { ActionTypes, DispatchType } from "./redux-store";


export type InitialAuthType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

let initialState: InitialAuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
export type setAuthUserDataType = {
    type: "SET-USER-DATA",
    payload: any              //!<<<<<<<<<<---------------------------
}

export const authReducer = (state: InitialAuthType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default: return state;
    }
}

export const setAuthUserData = (id: null | number, login: null | string, email: null | string, isAuth: boolean): setAuthUserDataType => ({
    type: "SET-USER-DATA",
    payload: { id, login, email, isAuth }
})

export const getAuthUserDataThunkCreator = () => (dispatch: DispatchType) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: DispatchType) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            //@ts-ignore    //!<<<<<<<<<<---------------------------
            dispatch(getAuthUserDataThunkCreator())
        }
    });
}

export const logout = () => (dispatch: DispatchType) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}