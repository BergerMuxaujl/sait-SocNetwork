import { connect } from "react-redux";
import { SendNewMessageCreator, UpdateNewMessageCreator } from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//     let state = props.store.getState();

//     let UpdateMessageBox = (newtxt) => {
//         props.store.dispatch(UpdateNewMessageCreator(newtxt));
//     };

//     let SendMessage = () => {
//         props.dispatch(SendNewMessageCreator());
//     };

//     return <Dialogs updateNewMessage={UpdateMessageBox} sendMessage={SendMessage} dialogsPage={state.dialogsPage} />;
// };

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
