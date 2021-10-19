import dialogsReducer from "./dialogs-Reducer";
import profileReducer from "./profile-Reducer";
import { createStore } from "redux";
import { combineReducers } from "redux";
import findUsersReducer from "./findusers-Reducer";

let reducers = combineReducers({ dialogsPage: dialogsReducer, profilePage: profileReducer, findusersPage: findUsersReducer });

let store = createStore(reducers);

export default store;
