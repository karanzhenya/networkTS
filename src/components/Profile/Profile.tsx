import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {CombinedState, Store} from "redux";
import {ActionsType, MessagesPageType, ProfilePageType} from "../../redux/Store";


type PropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; messagesPage: MessagesPageType; }>, ActionsType>;
}


function Profile() {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;