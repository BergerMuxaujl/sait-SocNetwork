import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import App from "./App";
import { addPost, updatePost } from "./redux/state";
import "./index.css";

let renderedEntireTree = (state) => {
    ReactDOM.render(<App appState={state} addPost={addPost} updatePost={updatePost} />, document.getElementById("root"));
};

renderedEntireTree(state);

subscribe(renderedEntireTree);

reportWebVitals();
