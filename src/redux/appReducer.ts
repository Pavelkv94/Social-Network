import { getAuthUserDataThunkCreator } from "./authReducer";
import { ActionTypes, DispatchType, ThunkType } from "./redux-store";

let initialState = {
    initialized: false
}
export type InitialAuthType = typeof initialState;

export type InitializedSuccessType = {
    type: "SET-INITIALIZED",
}


export const appReducer = (state: InitialAuthType = initialState, action: ActionTypes): InitialAuthType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}

export const initializedSuccess = (): InitializedSuccessType => ({
    type: "SET-INITIALIZED"
})

export const initializeApp = (): ThunkType => (dispatch: DispatchType) => {
    //@ts-ignore  //!<<<<=================================================== 
    let promise = dispatch(getAuthUserDataThunkCreator());

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })

}
