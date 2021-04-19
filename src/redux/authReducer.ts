import { ActionTypes } from "./redux-store";


type InitialAuthType = {
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
    data: InitialAuthType
}

export const authReducer = (state: InitialAuthType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: return state;
    }
}

export const setAuthUserData = (id: null | number, login: null | string, email: null | string) => ({
    type: "SET-USER-DATA",
    data: { id, login, email }
})