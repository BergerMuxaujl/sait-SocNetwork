import dialogsReducer from "./dialogs-Reducer";
import profileReducer from "./profile-Reducer";
import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import findUsersReducer from "./findusers-Reducer";
import authReducer from "./auth-Reducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-Reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    findusersPage: findUsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
