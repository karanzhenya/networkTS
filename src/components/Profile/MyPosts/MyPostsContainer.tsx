import React from 'react';
import MyPosts from "./MyPosts";
import {ActionsType, MessagesPageType, ProfilePageType} from "../../../redux/Store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import {CombinedState, Store} from "redux";


type PropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; messagesPage: MessagesPageType; }>, ActionsType>;
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