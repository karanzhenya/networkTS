import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";


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