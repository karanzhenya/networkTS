import React from 'react';
import MyPosts from "./MyPosts";
import {ActionsType, MessagesPageType, ProfilePageType} from "../../../redux/Store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import {CombinedState, Store} from "redux";
import StoreContext from "../../../StoreContext";


type PropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; messagesPage: MessagesPageType; }>, ActionsType>;
}

function MyPostsContainer() {


    return <StoreContext.Consumer>
        {store => {
            function addPost() {
                store.dispatch(addPostActionCreator())
            }

            function onPostChange(text: string) {
                let action = updateNewPostActionCreator(text)
                store.dispatch(action)
            }

            return <MyPosts posts={store.getState().profilePage.posts}
                            newPostText={store.getState().profilePage.newPostText}
                            updateNewPostAction={onPostChange}
                            addPost={addPost}/>
        }}
    </StoreContext.Consumer>
};


export default MyPostsContainer;