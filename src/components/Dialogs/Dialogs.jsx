import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((el) => {
        return <Dialog name={el.name} id={el.id} />;
    });

    let messageElements = props.messages.map((el) => {
        return <Message message={el.message} />;
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsSide}>{dialogsElements}</div>
            <div className={s.messagesSide}>
                <div className={s.messagesBox}>{messageElements}</div>
                <div className={s.sendContainer}>
                    <textarea className={s.tBoxSend}></textarea>
                    <button className={s.butSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
