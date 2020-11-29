import React from 'react';
import MyPosts from "./MyPosts";
import {PostType, ActionsType,} from "../../../redux/Store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

function MyPostsContainer(props: PropsType) {

    function addPost() {
        props.dispatch(addPostActionCreator())
    };

    function onPostChange(text: string) {
        let action = updateNewPostActionCreator(text)
        props.dispatch(action)
    };

    return <MyPosts posts={props.posts} newPostText={props.newPostText} updateNewPostAction={onPostChange}
                    addPost={addPost}/>
}


export default MyPostsContainer;