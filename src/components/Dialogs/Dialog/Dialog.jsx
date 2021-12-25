import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const Dialog = ({ id, name }) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

export default Dialog;
