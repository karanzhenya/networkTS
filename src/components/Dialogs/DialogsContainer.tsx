import React from 'react';
import {ActionsType, DialogType, MessageType} from "../../redux/Store";
import {changeNewMessageCreator, sendMessageCreator,} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


type PropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
    dispatch: (action: ActionsType) => void
}


function DialogsContainer(props: PropsType) {

    function changeMessageText(message: string) {
        props.dispatch(changeNewMessageCreator(message))
    };

    function addMessage() {
        props.dispatch(sendMessageCreator())
    }

    return (
        <Dialogs addMessage={addMessage} changeMessageText={changeMessageText} messages={props.messages}
                 dialogs={props.dialogs} newMessageText={props.newMessageText}/>
    );
}

export default DialogsContainer;