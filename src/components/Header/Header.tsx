import React from 'react';
import s from './Header.module.css'

function Header() {
    return (
            <header className={s.header}>
                <img src={'https://pngimg.com/uploads/github/github_PNG84.png'}></img>
            </header>
    );
}

export default Header;