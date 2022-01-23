import React from "react";
import s from "./ProfileInfo.module.css";
import image from "../../../accets/fake-ava.png";
import ProfileStatusWithHook from "./Status/ProfileStatusWithHook";
import Ava from "./Ava/Ava";

const ProfileInfo = ({ userProfile, status, updateUserStatus, isOwner, saveAva }) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.userWrapper}>
                <Ava photoSmall={userProfile.photos.small} isOwner={isOwner} saveAva={saveAva} />
                <div className={s.userInfo}>
                    <div className={s.fullName}>{userProfile.fullName}</div>
                    <div className={s.aboutMe}>About me: </div>
                    <span className={s.aboutMeContent}>{userProfile.aboutMe}</span>
                </div>
            </div>
            <ProfileStatusWithHook status={status} updateUserStatus={updateUserStatus} />
        </div>
    );
};

export default ProfileInfo;
