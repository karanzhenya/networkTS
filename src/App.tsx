import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import {PostType, MessageType, DialogType, StateType, ActionsType, ProfilePageType} from "./redux/Store";


type PropsType = {
    newPostText: string
    posts: Array<PostType>
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    dispatch: (action: ActionsType) => void
    newMessageText: string
    profilePage: ProfilePageType
}

export default function App(props: PropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <Dialogs
                    newMessageText={props.newMessageText}
                    messages={props.messages}
                    dialogs={props.dialogs}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/profile' render={() => <Profile
                    newPostText={props.newPostText}
                    posts={props.profilePage.posts}
                    dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    )
}