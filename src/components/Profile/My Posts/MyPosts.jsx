import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    let postData = [
        {
            id: 0,
            title: "First post",
            likes: 5,
            text: "This is text at first post. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur obcaecati quibusdam ex eum ut minima molestias est adipisci excepturi consequatur? Ipsam aut dicta autem dignissimos, nihil facere consequatur aperiam delectus.",
        },
        {
            id: 1,
            title: "Second post",
            likes: 15,
            text: "This is text at second post. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur obcaecati quibusdam ex eum ut minima molestias est adipisci excepturi consequatur? Ipsam aut dicta autem dignissimos, nihil facere consequatur aperiam delectus.",
        },
        {
            id: 2,
            title: "Third post",
            likes: 25,
            text: "This is text at third post. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur obcaecati quibusdam ex eum ut minima molestias est adipisci excepturi consequatur? Ipsam aut dicta autem dignissimos, nihil facere consequatur aperiam delectus.",
        },
    ];

    let postElements = postData.map((el) => {
        return <Post title={el.title} text={el.text} likesCount={el.likes} />;
    });

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div className={s.textBox}>
                <textarea></textarea>
            </div>
            <div className={s.buttonSendBox}>
                <button className={s.buttonSend}>Add post</button>
            </div>
            {postElements};
        </div>
    );
};

export default MyPosts;
