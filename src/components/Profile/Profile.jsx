import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";

const Profile = ({ userProfile, status, updateUserStatus, isOwner, saveAva }) => {
    return (
        <div className={s.content}>
            <ProfileInfo userProfile={userProfile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} saveAva={saveAva} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
