import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ActionsType} from "../../redux/Store";
import MyPostsContainer from './MyPosts/MyPostsContainer';


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;