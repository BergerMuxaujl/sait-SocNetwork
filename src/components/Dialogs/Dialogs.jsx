import React from "react";
import { SendNewMessageCreator, UpdateNewMessageCreator } from "../../redux/dialogs-Reducer";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((el) => {
        return <Dialog name={el.name} id={el.id} />;
    });

    let messageElements = props.dialogsPage.messages.map((el) => {
        return <Message message={el.message} />;
    });

    let localUpdateMessageBox = (e) => {
        let el = document.getElementById("123");
        console.log(el.scrollHeight);
        if (el.scrollHeight > 28) {
            el.style.height = `${el.scrollHeight}px`;
        } else {
            el.style.height = "28px";
        }

        props.dispatch(UpdateNewMessageCreator(e.target.value));
    };

    let localSendMessage = () => {
        props.dispatch(SendNewMessageCreator());
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsSide}>{dialogsElements}</div>
            <div className={s.messagesSide}>
                <div className={s.messagesBox}>{messageElements}</div>
                <div className={s.sendContainer}>
                    <textarea onChange={localUpdateMessageBox} className={s.tBoxSend} id="123" value={props.dialogsPage.newMessageText}></textarea>
                    <button onClick={localSendMessage} className={s.butSend}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
