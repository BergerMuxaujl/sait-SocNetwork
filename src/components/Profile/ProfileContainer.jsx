import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "./../../redux/profile-Reducer";
import { withRouter } from "react-router";
import Preloader from "../FindUsers/preloader";
import { withAuthRedirect } from "../../hoc/auth-Redirect";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 20315;
        this.props.getUserProfile(userId);
    }
    render() {
        return !this.props.userProfile ? <Preloader /> : <Profile {...this.props} />;
    }
}

let withAuthRedirectComponent = withAuthRedirect(ProfileAPIContainer);

let withUrlDataContComponent = withRouter(withAuthRedirectComponent);

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    };
};

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContComponent);
