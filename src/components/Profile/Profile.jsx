import React from "react";
import MyPosts from "./My Posts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts data={props.postData} addPost={props.addPost} />
        </div>
    );
};

export default Profile;
