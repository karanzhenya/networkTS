import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, PostType, ProfilePageType, UpdateNewPostActionType, ActionsType} from "../../State";


type PropsType = {
    profilePage: ProfilePageType
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;