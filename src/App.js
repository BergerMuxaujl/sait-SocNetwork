import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import FindUsersContainer from "./components/FindUsers/findUsersContainer";
import Login from "./components/Login/login";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/findusers" render={() => <FindUsersContainer />} />
                <Route path="/login" render={() => <Login />} />
            </div>
        </div>
    );
};

export default App;
