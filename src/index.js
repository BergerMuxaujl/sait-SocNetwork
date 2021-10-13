import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store-redux";
import App from "./App";
import "./index.css";

let renderedEntireTree = () => {
    ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

renderedEntireTree();

store.subscribe(renderedEntireTree);

reportWebVitals();
