import React from "react";
import Post from "./My Posts/Posts/Post";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.boxImg}>
                <img className={s.mainImage} src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
                </div>
                <div>Ava + description</div>
                <div className={s.myposts}>
                    My posts
                        <Post countLike="5" />
                        <Post countLike="10"/>
                        <Post countLike="15"/>
                        <Post countLike="22"/>
                        <Post countLike="2"/>
                </div>
        </div>
    )
}

export default Profile;