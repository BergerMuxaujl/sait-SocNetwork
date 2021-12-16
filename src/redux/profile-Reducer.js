import { profileAPI } from "../api/api";

const ADD_POST_TA = "ADD-POST";
const SET_USER_PROFILE_TA = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

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
    userProfile: null,
    status: "",
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
                        text: action.newPostText,
                    },
                ],
                newPostText: " ",
            };
        case SET_USER_PROFILE_TA:
            return {
                ...state,
                userProfile: action.userProfile,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status || "here write your status",
            };
        default:
            return state;
    }
};

export const AddPost = (newPostText) => ({ type: ADD_POST_TA, newPostText: newPostText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE_TA, userProfile: userProfile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status: status });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then((response) => {
            dispatch(setUserProfile(response));
        });
    };
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then((response) => {
            dispatch(setUserStatus(response.data));
        });
    };
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    };
};

export default profileReducer;
