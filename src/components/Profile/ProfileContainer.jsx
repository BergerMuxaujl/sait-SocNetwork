import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "./../../redux/profile-Reducer";
import { Redirect, withRouter } from "react-router";
import { profileAPI } from "../../api/api";
import Preloader from "../FindUsers/preloader";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 20315;
        this.props.getUserProfile(userId);
    }
    render() {
        if (!this.props.isAuth) return <Redirect to="./login" />;
        return !this.props.userProfile ? <Preloader /> : <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth,
    };
};

let withUrlDataContComponent = withRouter(ProfileAPIContainer);

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContComponent);
