import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {ActionsType, MessagesPageType, ProfilePageType} from "./redux/Store";
import {CombinedState, Store} from "redux";


type PropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; messagesPage: MessagesPageType; }>, ActionsType>;
}

export default function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    )
}