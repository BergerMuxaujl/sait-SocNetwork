import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "./../../redux/profile-Reducer";
import { Redirect, withRouter } from "react-router";
import Preloader from "../FindUsers/preloader";
import { compose } from "redux";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId && !this.props.isAuth) {
            this.props.history.push("/login");
        } else if (!userId && this.props.isAuth) {
            userId = this.props.myId;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return !this.props.userProfile ? <Preloader /> : <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        myId: state.auth.id,
    };
};

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }), withRouter)(ProfileAPIContainer);
