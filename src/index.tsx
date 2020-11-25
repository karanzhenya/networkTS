import React from 'react';
import './index.css';
import {store} from "./redux/Store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

export function rerenderEntireTree () {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>             {/*оборачивается главная компонента, чтобы испоьзовать роуты*/}
                <App
                    state={store.getState()}
                    newPostText={store._state.profilePage.newPostText}
                    newMessageText={store._state.messagesPage.newMessageText}
                    messages={store._state.messagesPage.messages}
                    dialogs={store._state.messagesPage.dialogs}
                    posts={store._state.profilePage.posts}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscriber(rerenderEntireTree)   //колбэк, чтобы прокинуть rerender в стейт

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
