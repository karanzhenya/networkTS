import React from 'react';
import {ActionsType, MessagesPageType, ProfilePageType} from "../../redux/Store";
import {changeNewMessageCreator, sendMessageCreator} from "../../redux/dialogsReducer";
import {CombinedState, Store} from "redux";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

type PropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; messagesPage: MessagesPageType; }>, ActionsType>;
}

function DialogsContainer() {
    return <StoreContext.Consumer>
        {store => {
            function changeMessageText(message: string) {
                store.dispatch(changeNewMessageCreator(message))
            }

            function addMessage() {
                store.dispatch(sendMessageCreator())
            }

            return <Dialogs addMessage={addMessage} changeMessageText={changeMessageText}
                            messages={store.getState().messagesPage.messages}
                            dialogs={store.getState().messagesPage.dialogs}
                            newMessageText={store.getState().messagesPage.newMessageText}/>
        }}
    </StoreContext.Consumer>
};

export default DialogsContainer;