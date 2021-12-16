import { stopSubmit } from "redux-form";
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
                ...action.payload,
            };
        default:
            return state;
    }
};

export let setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } });

export let getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.authMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true));
            }
        });
    };
};

export let login =
    (email, password, rememberMe = true) =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let action = stopSubmit("LogIn", { _error: "что-то не так" });
                dispatch(action);
            }
        });
    };

export let logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;
