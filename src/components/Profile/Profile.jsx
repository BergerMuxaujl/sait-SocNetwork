import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";

const Profile = ({ userProfile, status, updateUserStatus }) => {
    return (
        <div className={s.content}>
            <ProfileInfo userProfile={userProfile} status={status} updateUserStatus={updateUserStatus} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
