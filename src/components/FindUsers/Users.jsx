import s from "./findUsers.module.css";
import image from "../../accets/fake-ava.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Users = ({ users, followButtons, unfollow, follow }) => {
    return (
        <>
            {users.map((user) => (
                <div key={user.id} className={s.wrapperUser}>
                    <div className={s.avaWrapper}>
                        <div className={s.ava}>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.ava || image} alt="ava" className={s.avaImg} />
                            </NavLink>
                        </div>
                        <div className={s.followBox}>
                            {user.followed ? (
                                <button
                                    disabled={followButtons.some((id) => id === user.id)}
                                    onClick={() => unfollow(user.id)}
                                    className={`${s.butFol} ${s.unfollow} `}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={followButtons.some((id) => id === user.id)}
                                    onClick={() => follow(user.id)}
                                    className={`${s.butFol} ${s.follow} `}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.userInfo_top}>
                            <div className={s.fullName}>
                                <span className={s.firstName}>{user.name}</span>
                                <span className={s.surname}>{"user.surName"}</span>
                            </div>
                            <div className={s.location}>
                                <span className={s.city}>{"user.location.city"}</span>, <span className={s.country}>{"user.location.country"}</span>
                            </div>
                        </div>
                        <div className={s.status}>{user.status}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Users;
