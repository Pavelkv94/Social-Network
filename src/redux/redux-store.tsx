import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { StoreType } from "./store";

//Обьединяем наши редьюсеры
let reducers = combineReducers({
    profileReducer:profileReducer,
     dialogsReducer:dialogsReducer, 
     sidebarReducer:sidebarReducer
    });

//отдаем редсеры стору
export let store:StoreType = createStore(reducers, );