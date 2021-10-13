import React, { StrictMode } from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postElements = props.posts.map((el) => {
        return <Post title={el.title} text={el.text} likesCount={el.likes} />;
    });

    let onAddPost = () => {
        props.AddPost();
    };

    let refTBox = React.createRef();

    let onUpdateNewpost = () => {
        let newtxt = refTBox.current.value;
        props.UpdateNewpost(newtxt);
    };

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div className={s.textBox}>
                <textarea className={s.newpostText} onChange={onUpdateNewpost} ref={refTBox} value={props.newPostText}></textarea>
            </div>
            <div className={s.buttonSendBox}>
                <button onClick={onAddPost} className={s.buttonSend}>
                    Add post
                </button>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;
