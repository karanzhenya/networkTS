import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/Store";


type PropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
    addMessage: () => void
    changeMessageText: (message: string) => void
}


function Dialogs(props: PropsType) {

    function changeMessageText(e: ChangeEvent<HTMLTextAreaElement>) {
        let message = e.target.value;
        props.changeMessageText(message)
    };

    function addMessage() {
        props.addMessage()
    }

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map(m => <Message text={m.text}/>)

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