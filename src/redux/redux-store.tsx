import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { dialogsReducer, SendMessageType } from "./dialogsReducer";
import { AddPostActionType, profileReducer,  SetStatusType, SetUserProfileType } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { CurrentPageType, FollowType, SetUsersType, ToggleIsFetchingType, ToggleIsFollowingProgressType, TotalCountType, UnFollowType, usersReducer } from "./usersReducer";
import { authReducer, setAuthUserDataType } from "./authReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { FormAction, reducer as formReducer } from 'redux-form';

export type ThunkType = ThunkAction<void, ReduxStateType, unknown, ActionTypes>
export type ActionTypes =
    AddPostActionType
    | SendMessageType
    | FollowType
    | UnFollowType
    | SetUsersType
    | CurrentPageType
    | TotalCountType
    | ToggleIsFetchingType
    | SetUserProfileType
    | setAuthUserDataType
    | ToggleIsFollowingProgressType
    | SetStatusType
//| FormAction


export type DispatchType = (action: ActionTypes) => void;
//Обьединяем наши редьюсеры
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

export type RootReducerType = typeof rootReducer;
export type ReduxStateType = ReturnType<RootReducerType> ;//AppStateType

export type ReduxStoreType = {
    getState: () => ReduxStateType
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
};
//отдаем редьюсеры стору
export let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;