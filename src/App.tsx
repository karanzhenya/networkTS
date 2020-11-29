import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import {StoreType} from "./redux/Store";
import DialogsContainer from './components/Dialogs/DialogsContainer';


type PropsType = {
    store: StoreType
}

export default function App(props: PropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    )
}