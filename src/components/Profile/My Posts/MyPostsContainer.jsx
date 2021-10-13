import React, { StrictMode } from "react";
import MyPosts from "./MyPosts";
import { AddPostCreator, UpdateNewpostCreator } from "../../../redux/profile-Reducer";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let AddPost = () => {
        props.store.dispatch(AddPostCreator());
    };

    let UpdateNewPost = (newtxt) => {
        props.store.dispatch(UpdateNewpostCreator(newtxt));
    };

    return <MyPosts AddPost={AddPost} UpdateNewpost={UpdateNewPost} posts={state.profilePage.posts} />;
};

export default MyPostsContainer;
