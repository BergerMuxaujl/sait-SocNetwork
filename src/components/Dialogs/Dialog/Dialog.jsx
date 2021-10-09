import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const Dialog = (props) => {
    let pathDialog = "/dialogs/" + props.id;
    console.log(pathDialog);
    return (
        <div className={s.dialog}>
            <NavLink to={pathDialog}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;
