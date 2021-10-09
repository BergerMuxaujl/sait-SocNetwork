import React from "react";
import MyPosts from "./My Posts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} updatePost={props.updatePost} />
        </div>
    );
};

export default Profile;
