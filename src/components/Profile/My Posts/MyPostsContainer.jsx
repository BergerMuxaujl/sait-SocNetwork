import MyPosts from "./MyPosts";
import { AddPost } from "../../../redux/profile-Reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const MyPostsContainer = connect(mapStateToProps, { AddPost })(MyPosts);

export default MyPostsContainer;
