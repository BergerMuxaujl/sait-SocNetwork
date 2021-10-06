import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialog = (props) => {
    let pathDialog = "/dialogs/" + props.id;
    console.log(pathDialog);
    return (
        <div className={s.dialog}>
            <NavLink to={pathDialog}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
    let dialogsData = [
        { id: 0, name: "Angela" },
        { id: 1, name: "Nikita" },
        { id: 2, name: "Alisa" },
    ];
    let messageData = [
        { id: 0, message: "Privet!" },
        { id: 1, message: "Che delaesh?" },
        { id: 2, message: "Zdarova!" },
    ];

    let dialogsElements = dialogsData.map((el) => {
        return <Dialog name={el.name} id={el.id} />;
    });

    let messageElements = messageData.map((el) => {
        return <Message message={el.message} />;
    });
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>{messageElements}</div>
        </div>
    );
};

export default Dialogs;
