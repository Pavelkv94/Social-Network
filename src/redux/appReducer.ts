import { Dispatch } from "redux";
import { getAuthUserDataThunkCreator } from "./authReducer";
import { ActionTypes, ThunkType } from "./redux-store";

let initialState = {
    initialized: false
}
export type InitialAuthType = typeof initialState;

export type InitializedSuccessType = ReturnType<typeof initializedSuccess>


export const appReducer = (state: InitialAuthType = initialState, action: ActionTypes): InitialAuthType => {
    switch (action.type) {
        case "SOCIAL-NETWORK/APP/SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}

export const initializedSuccess = () => ({
    type: "SOCIAL-NETWORK/APP/SET-INITIALIZED"
} as const)

export const initializeApp = (): ThunkType => (dispatch: Dispatch<ActionTypes>) => {
    //@ts-ignore  //!<<<<=================================================== 
    let promise = dispatch(getAuthUserDataThunkCreator());

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })

}
