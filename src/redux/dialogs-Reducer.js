const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 0, name: "Angela" },
        { id: 1, name: "Nikita" },
        { id: 2, name: "Alisa" },
    ],
    messages: [
        { id: 0, message: "Privet!" },
        { id: 1, message: "Che delaesh?" },
        { id: 2, message: "Zdarova!" },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: action.newMessageText }],
            };
        default:
            return state;
    }
};

export const sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText: newMessageText });

export default dialogsReducer;
