import React from 'react';
import MyPosts from "./MyPosts";
import {StoreType,} from "../../../redux/Store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";


type PropsType = {
    store: StoreType
}

function MyPostsContainer(props: PropsType) {

    function addPost() {
        props.store.dispatch(addPostActionCreator())
    };

    function onPostChange(text: string) {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    };

    return <MyPosts posts={props.store.getState().profilePage.posts}
                    newPostText={props.store.getState().profilePage.newPostText} updateNewPostAction={onPostChange}
                    addPost={addPost}/>
}


export default MyPostsContainer;