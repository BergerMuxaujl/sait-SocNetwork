const ADD_POST = "ADD-POST";
const UPDATE_NEWPOST = "UPDATE-NEWPOST";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({
                id: state.posts.length + 1,
                Title: "New post",
                likes: 0,
                text: state.newPostText,
            });
            state.newPostText = " ";
            return state;

        case UPDATE_NEWPOST:
            state.newPostText = action.txt;
            return state;
        default:
            return state;
    }
};

export const AddPostCreator = () => ({ type: ADD_POST });
export const UpdateNewpostCreator = (text) => ({
    type: UPDATE_NEWPOST,
    txt: text,
});

export default profileReducer;
