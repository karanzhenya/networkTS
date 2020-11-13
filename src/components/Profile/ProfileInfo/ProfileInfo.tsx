import React from 'react';
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return (
            <div className={s.profileInfo}>
            <div><img src={'https://cs9.pikabu.ru/post_img/big/2019/12/21/9/1576941329120680820.jpg'}></img></div>
            <div>Ava+description</div>
        </div>
    );
}

export default ProfileInfo;