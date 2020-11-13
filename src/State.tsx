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
const UPDATE_NEW_POST_CHANGE = "UPDATE-NEW-POST-CHANGE"
const UPDATE_NEW_MESSAGE_CHANGE = "UPDATE-NEW-MESSAGE-CHANGE"
const SEND_MESSAGE = "SEND-MESSAGE"
const ADD_POST = "ADD-POST"
export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdateNewPostActionType = {
    type: typeof UPDATE_NEW_POST_CHANGE,
    text: string
}
export type SendMessageType = {
    type: typeof SEND_MESSAGE,
}
export type ChangeNewMessageActionType = {
    type: typeof UPDATE_NEW_MESSAGE_CHANGE,
    message: string
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
    dispatch(action: ActionsType) {
        switch (action.type) {
            case ADD_POST:
                let newPost: PostType = {
                    id: 3,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._rerenderEntireTree(this._state);
                break;
            case  UPDATE_NEW_POST_CHANGE:
                this._state.profilePage.newPostText = action.text;
                this._rerenderEntireTree(this._state);
                break;
            case SEND_MESSAGE:
                let newMessage: MessageType = {
                    id: 5,
                    text: this._state.messagesPage.newMessageText
                };
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageText = "";
                this._rerenderEntireTree(this._state);
                break;
            case UPDATE_NEW_MESSAGE_CHANGE:
                this._state.messagesPage.newMessageText = action.message;
                this._rerenderEntireTree(this._state);
                break;
        }
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

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
};                                                                       //возвращает тип для диспатча, экспортится туда, где вызывается сам диспатч
export const updateNewPostActionCreator = (text: string): UpdateNewPostActionType => {
    return {
        type: UPDATE_NEW_POST_CHANGE,
        text: text
    }
};
export const sendMessageCreator = (): SendMessageType => {
    return {
        type: SEND_MESSAGE
    }
};
export const changeNewMessageCreator = (message: string): ChangeNewMessageActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_CHANGE,
        message: message
    }
};