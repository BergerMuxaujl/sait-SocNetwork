import React from "react";
import s from "./ProfileInfo.module.css";
import image from "../../../accets/fake-ava.png";
import Preloader from "../../FindUsers/preloader";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader />;
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.boxImg}>
                <img
                    className={s.mainImage}
                    src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></img>
            </div>
            <div className={s.userWrapper}>
                <img src={props.userProfile.photos.small || image} alt="ava" className={s.userAva} />
                <div className={s.userInfo}>
                    <div className={s.fullName}>{props.userProfile.fullName}</div>
                    <div className={s.aboutMe}>About me: </div>
                    <span className={s.aboutMeContent}>{props.userProfile.aboutMe}</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
