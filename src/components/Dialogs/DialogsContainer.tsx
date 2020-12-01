import React from 'react';
import {ActionsType, MessagesPageType, ProfilePageType, StoreType} from "../../redux/Store";
import {changeNewMessageCreator, sendMessageCreator,} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {CombinedState, Store} from "redux";

type PropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; messagesPage: MessagesPageType; }>, ActionsType>;
}

function DialogsContainer(props: PropsType) {

    function changeMessageText(message: string) {
        props.store.dispatch(changeNewMessageCreator(message))
    };

    function addMessage() {
        props.store.dispatch(sendMessageCreator())
    }

    return (
        <Dialogs addMessage={addMessage} changeMessageText={changeMessageText}
                 messages={props.store.getState().messagesPage.messages}
                 dialogs={props.store.getState().messagesPage.dialogs}
                 newMessageText={props.store.getState().messagesPage.newMessageText}/>
    );
}

export default DialogsContainer;