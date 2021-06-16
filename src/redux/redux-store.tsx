import { applyMiddleware, combineReducers, compose, createStore, Dispatch, Store } from "redux";
import { dialogsReducer, SendMessageType } from "./dialogsReducer";
import { AddPostActionType, profileReducer, SetStatusType, SetUserProfileType } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { CurrentPageType, FollowType, SetUsersType, ToggleIsFetchingType, ToggleIsFollowingProgressType, TotalCountType, UnFollowType, usersReducer } from "./usersReducer";
import { authReducer, setAuthUserDataType } from "./authReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { FormAction, reducer as formReducer } from 'redux-form';
import { appReducer, InitializedSuccessType } from "./appReducer";

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
    | InitializedSuccessType
//| FormAction



//Обьединяем наши редьюсеры
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});





export type RootReducerType = typeof rootReducer;
export type ReduxStateType = ReturnType<RootReducerType>;//AppStateType

export type ReduxStoreType = {
    getState: () => ReduxStateType
    subscribe: (observer: () => void) => void
    dispatch: Dispatch<ActionTypes>
};
//todo старый стор
// export let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//todo новый стор с REDUX_DEVTOOLS
export const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//отдаем редьюсеры стору
export const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store;