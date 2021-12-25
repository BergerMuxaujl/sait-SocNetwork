import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = ({ isAuth, login, logout }) => {
    return (
        <header className={s.header}>
            <div className={s.logoWrapper}>
                <img
                    src="https://w7.pngwing.com/pngs/467/479/png-transparent-responsive-web-design-web-development-computer-icons-world-wide-web.png"
                    alt="picture"
                ></img>
            </div>
            <div className={s.loginWrap}>
                {isAuth ? (
                    <div>
                        {login} - <button onClick={logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to="./login" className={s.login}>
                        Login
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
