import React from "react";
import {CombinedState, Store} from "redux";
import {ActionsType, MessagesPageType, ProfilePageType} from "./redux/Store";
import store, { RootStoreType } from "./redux/redux-store";


type ProviderType = {
    children: any;
    store: Store
}

const StoreContext = React.createContext(store)

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider  value={props.store}>{props.children}</StoreContext.Provider>
}

export default StoreContext;