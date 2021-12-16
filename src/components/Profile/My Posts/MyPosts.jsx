import React, { StrictMode } from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "./../../../common/FormControls/FormControls";
import { required, validMaxLength } from "../../../utils/validates/validates";

const validMaxLength50 = validMaxLength(50);

let PostAdd = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textBox}>
                <Field component={Textarea} name="textarea" validate={[required, validMaxLength50]} className={s.newpostText} />
            </div>
            <div className={s.buttonSendBox}>
                <button name="button" className={s.buttonSend}>
                    Add post
                </button>
            </div>
        </form>
    );
};

PostAdd = reduxForm({ form: "PostAdd" })(PostAdd);

const MyPosts = (props) => {
    let postElements = props.posts.map((el) => {
        return <Post title={el.title} text={el.text} likesCount={el.likes} />;
    });

    let onAddPost = (formData) => {
        props.AddPost(formData.textarea);
    };

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <PostAdd onSubmit={onAddPost} />
            {postElements}
        </div>
    );
};

export default MyPosts;
