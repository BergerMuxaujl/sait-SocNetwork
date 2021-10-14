import MyPosts from "./MyPosts";
import { AddPostCreator, UpdateNewpostCreator } from "../../../redux/profile-Reducer";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState();

//     let AddPost = () => {
//         props.store.dispatch(AddPostCreator());
//     };

//     let UpdateNewPost = (newtxt) => {
//         props.store.dispatch(UpdateNewpostCreator(newtxt));
//     };

//     return <MyPosts AddPost={AddPost} UpdateNewpost={UpdateNewPost} posts={state.profilePage.posts} />;
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => {
            dispatch(AddPostCreator());
        },
        UpdateNewpost: (newtxt) => {
            dispatch(UpdateNewpostCreator(newtxt));
        },
    };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
