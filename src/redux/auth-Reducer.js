import { authAPI } from "../api/api";
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};

export let setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, data: { id, email, login } });

export let getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login));
            }
        });
    };
};

export default authReducer;
