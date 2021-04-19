import { ActionTypes } from "./redux-store";


type InitialAuthType = {
    userId: null | number
    login: null | string
    email: null | string
}

let initialState: InitialAuthType = {
    userId: null,
    login: null,
    email: null,

}
export type setUserDataType = {
    type: "SET-USER-DATA",
    data: InitialAuthType
}

export const authReducer = (state: InitialAuthType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data
            }
        default: return state;
    }
}

export const setUserData = (userId: null | number, login: null | string, email: null | string) => ({
    type: "SET-USER-DATA",
    data: { userId, login, email }
})