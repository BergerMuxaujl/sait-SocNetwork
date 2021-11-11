import React from "react";
import s from "./ProfileInfo.module.css";
import image from "../../../accets/fake-ava.png";
import ProfileStatus from "./Status/ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.userWrapper}>
                <img src={props.userProfile.photos.small || image} alt="ava" className={s.userAva} />
                <div className={s.userInfo}>
                    <div className={s.fullName}>{props.userProfile.fullName}</div>
                    <div className={s.aboutMe}>About me: </div>
                    <span className={s.aboutMeContent}>{props.userProfile.aboutMe}</span>
                </div>
            </div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
        </div>
    );
};

export default ProfileInfo;
