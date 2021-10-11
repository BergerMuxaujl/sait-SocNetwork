import React, { StrictMode } from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";
import { AddPostActionCreator, UpdateNewpostActionCreator } from "../../../redux/store";

const MyPosts = (props) => {
    let postElements = props.posts.map((el) => {
        return <Post title={el.title} text={el.text} likesCount={el.likes} />;
    });

    let refTBox = React.createRef();

    let localAddPost = () => {
        props.dispatch(AddPostActionCreator());
        props.dispatch(UpdateNewpostActionCreator(refTBox.current.value));
    };

    let localUpdateNewPost = () => {
        props.dispatch(UpdateNewpostActionCreator(refTBox.current.value));
    };

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div className={s.textBox}>
                <textarea className={s.newpostText} onChange={localUpdateNewPost} ref={refTBox} value={props.newPostText}></textarea>
            </div>
            <div className={s.buttonSendBox}>
                <button onClick={localAddPost} className={s.buttonSend}>
                    Add post
                </button>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;
