import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postElements = props.data.map((el) => {
        return <Post title={el.title} text={el.text} likesCount={el.likes} />;
    });

    let refTBox = React.createRef();

    let addPost = () => {
        let txt = refTBox.current.value;
        props.addPost(txt);
    };
    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div className={s.textBox}>
                <textarea ref={refTBox}></textarea>
            </div>
            <div className={s.buttonSendBox}>
                <button onClick={addPost} className={s.buttonSend}>
                    Add post
                </button>
            </div>
            {postElements};
        </div>
    );
};

export default MyPosts;
