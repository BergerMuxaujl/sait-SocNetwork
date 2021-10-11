import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import App from "./App";
import "./index.css";

let renderedEntireTree = () => {
    ReactDOM.render(<App appState={store.getState()} dispatch={store.dispatch.bind(store)} />, document.getElementById("root"));
};
renderedEntireTree();

store.subscribe(renderedEntireTree);

reportWebVitals();
