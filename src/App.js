import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs dialogs={props.appState.dialogsPage.dialogs} messages={props.appState.dialogsPage.messages} />}
                    />
                    <Route
                        path="/profile"
                        render={() => (
                            <Profile
                                posts={props.appState.profilePage.posts}
                                newPostText={props.appState.profilePage.newPostText}
                                addPost={props.addPost}
                                updatePost={props.updatePost}
                            />
                        )}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
