import React from "react";
import {RootStoreType} from "./index";
import {CombinedState, Store} from "redux";
import {ActionsType, MessagesPageType, ProfilePageType} from "./redux/Store";


type ProviderType = {
    children: any
    store: Store<CombinedState<{ profilePage: ProfilePageType; messagesPage: MessagesPageType; }>, ActionsType>
}

const StoreContext = React.createContext(null)

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}

export default StoreContext;