import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import { renderedEntireTree } from "./render";

renderedEntireTree(state);

reportWebVitals();
