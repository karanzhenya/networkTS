import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';


type dialogItemType = {
    name: string
    id: number
}

function DialogItem(props: dialogItemType) {

    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}




export default DialogItem;