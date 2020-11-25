import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ActionsType,} from "../../../redux/Store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

function MyPosts(props: PropsType) {

    function addPost  () {
            props.dispatch(addPostActionCreator())
        };

    function onPostChange (e: ChangeEvent<HTMLTextAreaElement>) {
        let text = e.target.value;
        props.dispatch(updateNewPostActionCreator(text))
    };

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.posts}><h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            {postElements}
        </div>
    )
}


export default MyPosts;