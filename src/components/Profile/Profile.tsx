import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/Store";
import MyPostsContainer from './MyPosts/MyPostsContainer';


type PropsType = {
    store: StoreType
}


function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;