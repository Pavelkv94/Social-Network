import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";

//Обьединяем наши редьюсеры
let reducers = combineReducers({
    profileReducer:profileReducer,
     dialogsReducer:dialogsReducer, 
     sidebarReducer:sidebarReducer
    });

//отдаем редсеры стору
export let store = createStore(reducers, );