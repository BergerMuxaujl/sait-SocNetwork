import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "./../../redux/findusers-Reducer";
import FindUsers from "./findUsers";
import * as axios from "axios";
import React from "react";

class FindUsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (num) => {
        this.props.setCurrentPage(num);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        return (
            <FindUsers
                totalUsersCount={this.props.totalUsersCount}
                countUsersPage={this.props.countUsersPage}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        );
    }
}

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

const FindUsersContainer = connect(mapStateToProps, mapDispatchtoProps)(FindUsersAPIComponent);

export default FindUsersContainer;
