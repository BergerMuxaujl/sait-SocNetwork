import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "./../../redux/findusers-Reducer";
import FindUsers from "./findUsers";

let mapStateToProps = (state) => {
    return {
        users: state.findusersPage.users,
    };
};

let mapDispatchtoProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};

const FindUsersContainer = connect(mapStateToProps, mapDispatchtoProps)(FindUsers);

export default FindUsersContainer;
