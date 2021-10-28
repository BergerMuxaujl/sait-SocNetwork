import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "./../../redux/profile-Reducer";
import * as axios from "axios";
import { withRouter } from "react-router";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    };
};

let withUrlDataContComponent = withRouter(ProfileAPIContainer);

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContComponent);
