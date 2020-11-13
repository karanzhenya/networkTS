import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, changeNewMessageCreator, DialogType, MessageType, sendMessageCreator,} from "../../State";


type PropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
    dispatch: (action: ActionsType) => void
}



function Dialogs(props: PropsType) {

    function changeMessageText (e: ChangeEvent<HTMLTextAreaElement>){
        let message = e.target.value;
        props.dispatch(changeNewMessageCreator(message))
    };

    function addMessage () {
        props.dispatch(sendMessageCreator())
    }

    let dialogElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map( m => <Message text={m.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <textarea onChange={changeMessageText} value={props.newMessageText}></textarea>
            <button className={s.buttonSend} onClick={addMessage}>Send</button>
        </div>
    );
}

export default Dialogs;