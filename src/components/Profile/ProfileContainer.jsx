import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "./../../redux/profile-Reducer";
import { withRouter } from "react-router";
import Preloader from "../FindUsers/preloader";
// import { withAuthRedirect } from "../../hoc/auth-Redirect";
import { compose } from "redux";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 20315;
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
    };
};

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }), withRouter)(ProfileAPIContainer);
