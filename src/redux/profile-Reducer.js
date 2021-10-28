const ADD_POST_TA = "ADD-POST";
const UPDATE_NEWPOST_TA = "UPDATE-NEWPOST";
const SET_USER_PROFILE_TA = "SET-USER-PROFILE";

let initialState = {
    posts: [
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
    ],
    newPostText: "default text post",
    userProfile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_TA:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length + 1,
                        Title: "New post",
                        likes: 0,
                        text: state.newPostText,
                    },
                ],
                newPostText: " ",
            };
        case SET_USER_PROFILE_TA:
            return {
                ...state,
                userProfile: action.userProfile,
            };
        case UPDATE_NEWPOST_TA:
            return {
                ...state,
                newPostText: action.txt,
            };
        default:
            return state;
    }
};

export const AddPostCreator = () => ({ type: ADD_POST_TA });
export const UpdateNewpostCreator = (text) => ({
    type: UPDATE_NEWPOST_TA,
    txt: text,
});
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE_TA, userProfile: userProfile });

export default profileReducer;
