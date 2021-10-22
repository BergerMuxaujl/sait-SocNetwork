import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "./../../redux/findusers-Reducer";
import FindUsers from "./findUsers";

let mapStateToProps = (state) => {
    return {
        users: state.findusersPage.users,
        totalUsersCount: state.findusersPage.totalUsersCount,
        countUsersPage: state.findusersPage.countUsersPage,
        currentPage: state.findusersPage.currentPage,
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
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
    };
};

const FindUsersContainer = connect(mapStateToProps, mapDispatchtoProps)(FindUsers);

export default FindUsersContainer;
