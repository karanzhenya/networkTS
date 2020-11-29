import React from 'react';
import {StoreType} from "../../redux/Store";
import {changeNewMessageCreator, sendMessageCreator,} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


type PropsType = {
    store: StoreType
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