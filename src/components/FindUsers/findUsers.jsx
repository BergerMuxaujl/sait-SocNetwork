import s from "./findUsers.module.css";
import image from "../../accets/fake-ava.png";
import React from "react";

const FindUsers = (props) => {
    let countPages = Math.ceil(props.totalUsersCount / props.countUsersPage);

    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    return (
        <div className={s.wrapperUsers}>
            <div className={s.pagesButton}>
                {pages.map((num) => {
                    return (
                        <span
                            onClick={(e) => {
                                props.onPageChanged(num);
                            }}
                            className={num === props.currentPage ? `${s.pageButtonCurrent} ${s.pageButton}` : s.pageButton}
                        >
                            {num}
                        </span>
                    );
                })}
            </div>
            {props.users.map((user) => (
                <div key={user.id} className={s.wrapperUser}>
                    <div className={s.avaWrapper}>
                        <div className={s.ava}>
                            <img src={user.ava || image} alt="ava" className={s.avaImg} />
                        </div>
                        <div className={s.followBox}>
                            {user.followed ? (
                                <button onClick={() => props.unfollow(user.id)} className={`${s.butFol} ${s.unfollow} `}>
                                    Unfollow
                                </button>
                            ) : (
                                <button onClick={() => props.follow(user.id)} className={`${s.butFol} ${s.follow} `}>
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
        </div>
    );
};

export default FindUsers;
