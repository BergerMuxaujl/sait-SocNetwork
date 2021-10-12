import dialogsReducer from "./dialogs-Reducer";
import profileReducer from "./profile-Reducer";
import { createStore } from "redux";
import { combineReducers } from "redux";

let reducers = combineReducers({ dialogsPage: dialogsReducer, profilePage: profileReducer });

let store = createStore(reducers);

export default store;
