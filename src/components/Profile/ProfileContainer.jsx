import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "./../../redux/profile-Reducer";
import * as axios from "axios";
import { withRouter } from "react-router";
import { profileAPI } from "../../api/api";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.myId;
        profileAPI.getUserProfile(userId).then((response) => {
            this.props.setUserProfile(response);
        });
    }
    render() {
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        myId: state.auth.id,
    };
};

let withUrlDataContComponent = withRouter(ProfileAPIContainer);

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContComponent);
