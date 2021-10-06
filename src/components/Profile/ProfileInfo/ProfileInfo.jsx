import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.boxImg}>
                <img
                    className={s.mainImage}
                    src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></img>
            </div>
            <div>Ava + description</div>
        </div>
    );
};

export default ProfileInfo;
