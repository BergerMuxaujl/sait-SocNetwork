import { connect } from "react-redux";
import { SendNewMessageCreator, UpdateNewMessageCreator } from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return { dialogsPage: state.dialogsPage };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (newtxt) => {
            dispatch(UpdateNewMessageCreator(newtxt));
        },
        sendMessage: () => {
            dispatch(SendNewMessageCreator());
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
