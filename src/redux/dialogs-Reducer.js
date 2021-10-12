const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEWMESSAGE = "UPDATE-NEWMESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messages.push({
                id: state.messages.length + 1,
                message: state.newMessageText,
            });
            state.newMessageText = "";
            return state;
        case UPDATE_NEWMESSAGE:
            state.newMessageText = action.txt;
            return state;
        default:
            return state;
    }
};

export const SendNewMessageCreator = () => ({ type: SEND_MESSAGE });
export const UpdateNewMessageCreator = (text) => ({
    type: UPDATE_NEWMESSAGE,
    txt: text,
});

export default dialogsReducer;
