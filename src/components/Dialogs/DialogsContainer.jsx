import React from "react";
import { SendNewMessageCreator, UpdateNewMessageCreator } from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let UpdateMessageBox = (newtxt) => {
        props.store.dispatch(UpdateNewMessageCreator(newtxt));
    };

    let SendMessage = () => {
        props.store.dispatch(SendNewMessageCreator());
    };

    return <Dialogs updateNewMessage={UpdateMessageBox} sendMessage={SendMessage} dialogsPage={state.dialogsPage} />;
};

export default DialogsContainer;
