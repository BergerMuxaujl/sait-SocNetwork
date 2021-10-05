import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className="nav">
            <div className={s.item}>
        <a href="/profile">profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
        <a href="/dialogs">messages</a>
    </div>
    <div className={s.item}>
        <a href="/news">news</a>
    </div>
    <div className={s.item}>
        <a href="/music">music</a>
    </div>
    <div className={s.item}>
        <a href="/settings">settings</a>
    </div>
    </nav >
    )
}

export default Navbar;