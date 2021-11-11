import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
