import {profileReducer, AddPostActionType, UpdateNewPostActionType} from "./profileReducer";
import {ChangeNewMessageActionType, dialogsReducer, SendMessageType} from "./dialogsReducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MessageType = {
    id: number
    text: string
}
export type DialogType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}
export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type ActionsType = AddPostActionType | UpdateNewPostActionType | SendMessageType | ChangeNewMessageActionType
type StoreType = {
    _state: StateType,
    subscriber: (observer: () => void) => void,
    getState: () => StateType,
    _rerenderEntireTree: (_state: StateType) => void,
    dispatch: (action: ActionsType) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "I tried so hard and got so far", likesCount: 5},
                {id: 2, message: "But in the end, it doesn't even matter!", likesCount: 12}
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Zhenya"},
                {id: 2, name: "Kseniya"},
                {id: 3, name: "Denis"},
                {id: 4, name: "Dima"},
            ],
            messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: "Hello"},
                {id: 3, text: "Bye-bye"},
                {id: 4, text: "Do svidaniya"},
            ],
            newMessageText: ""
        }
    },
    _rerenderEntireTree() {
    },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._rerenderEntireTree = observer
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._rerenderEntireTree(this._state);
    }
};

/*    addMessage () {
        let newMessage: MessageType = {
            id: 5,
            text: this._state.messagesPage.newMessageText
        };
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = "";
        this._rerenderEntireTree(this._state)
    },

    changeMessageText (message) {
        this._state.messagesPage.newMessageText = message;
        this._rerenderEntireTree(this._state);
    }
}*/
/*   addPost () {
        let newPost: PostType = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
        this._rerenderEntireTree()
    },
    updateNewPostChange (text:string) {
    this._state.profilePage.newPostText = text;
        this._rerenderEntireTree()
    },*/