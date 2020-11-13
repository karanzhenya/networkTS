import React from 'react';
import s from './Message.module.css'

type messageType = {
    text: string
}

function Message(props: messageType) {
    return (
            <div className={s.message}>{props.text}</div>
    )
}


export default Message;