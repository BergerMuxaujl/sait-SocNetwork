import React from "react";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { required, validMaxLength } from "../../utils/validates/validates";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Textarea } from "./../../common/FormControls/FormControls";

const validMaxLength30 = validMaxLength(30);

let SendMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendContainer}>
            <Field component={Textarea} validate={[required, validMaxLength30]} name={"textarea"} className={s.tBoxSend} placeholder="Enter your message" />
            <button name={"button"} className={s.butSend}>
                Send
            </button>
        </form>
    );
};

SendMessage = reduxForm({ form: "SendMessage" })(SendMessage);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((el) => {
        return <Dialog name={el.name} id={el.id} />;
    });

    let messageElements = props.dialogsPage.messages.map((el) => {
        return <Message message={el.message} />;
    });

    let AddMessage = (value) => {
        props.sendMessage(value.textarea);
    };

    if (!props.isAuth) return <Redirect to="/login" />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsSide}>{dialogsElements}</div>
            <div className={s.messagesSide}>
                <div className={s.messagesBox}>{messageElements}</div>
                <SendMessage onSubmit={AddMessage} />
            </div>
        </div>
    );
};

export default Dialogs;
