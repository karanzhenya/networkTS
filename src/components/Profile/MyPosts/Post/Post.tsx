import React, {useState} from 'react';
import s from './Post.module.css'
import img from './img.png'

type messageType = {
    message: string
    likesCount: number
    id: number
}

function Post(props: messageType) {
    let [likesCount, setLikesCount] = useState(props.likesCount)
    return (
        <div>
            <div className={s.item}>
            <div><img className={s.ava} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9yz8aJjXawDVjrEMtHkp8j-qObZaVyt0whQ&usqp=CAU'}></img>
                {props.message}
            </div>
                <div className={s.like}>{likesCount} <img onClick={()=>{setLikesCount(likesCount+1)}} className={s.heart} src={img} alt={"img"}></img></div>
            </div>
        </div>
    );
}

export default Post;