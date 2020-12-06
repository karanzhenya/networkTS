import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";


let rootReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
});

/*type RootReducersType = typeof rootReducers
export type RootStoreType = ReturnType<RootReducersType>*/

let store = createStore(rootReducers);
export default store;