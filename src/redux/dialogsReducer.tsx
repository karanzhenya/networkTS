import {ActionsType, MessagesPageType, MessageType} from "./Store";

export type SendMessageType = {
    type: typeof SEND_MESSAGE,
}
export type ChangeNewMessageActionType = {
    type: typeof UPDATE_NEW_MESSAGE_CHANGE,
    message: string
}

const UPDATE_NEW_MESSAGE_CHANGE = "UPDATE-NEW-MESSAGE-CHANGE";
const SEND_MESSAGE = "SEND-MESSAGE";

export const dialogsReducer = (state: MessagesPageType, action: ActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage: MessageType = {
                id: 5,
                text: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_CHANGE:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
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