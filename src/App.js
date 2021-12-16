import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import FindUsersContainer from "./components/FindUsers/findUsersContainer";
import Login from "./components/Login/login";
import { initializeApp } from "./redux/app-Reducer";
import { connect } from "react-redux";
import Preloader from "./components/FindUsers/preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }
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
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
