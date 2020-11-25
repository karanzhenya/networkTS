import {ActionsType, PostType, ProfilePageType} from "./Store";

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdateNewPostActionType = {
    type: typeof UPDATE_NEW_POST_CHANGE,
    text: string
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_CHANGE = "UPDATE-NEW-POST-CHANGE";


export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case  UPDATE_NEW_POST_CHANGE:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};

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