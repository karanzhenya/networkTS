import {CombinedState, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {ActionsType, MessagesPageType, ProfilePageType} from "./Store";

export type RootStoreType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; messagesPage: MessagesPageType; }>, ActionsType>
}

let rootReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
});

/*type RootReducersType = typeof rootReducers
export type RootStoreType = ReturnType<RootReducersType>*/

let store = createStore(rootReducers);
export default store;