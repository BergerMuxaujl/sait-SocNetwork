import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((el) => {
        return <Dialog name={el.name} id={el.id} />;
    });

    let messageElements = props.messageData.map((el) => {
        return <Message message={el.message} />;
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsSide}>{dialogsElements}</div>
            <div className={s.messagesSide}>
                <div className={s.messagesBox}>{messageElements}</div>
                <button className={s.butSend}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;
