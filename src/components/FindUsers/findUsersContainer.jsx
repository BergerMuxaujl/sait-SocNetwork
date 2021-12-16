import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togleFetching, unfollow, togleFollow, requestUsers } from "./../../redux/findusers-Reducer";

import FindUsers from "./findUsers";
import React from "react";
import Preloader from "./preloader";
import { getCountUsersPage, getCurrentPage, getFollowButtons, getIsFetching, getTotalUsersCount, getUsersSelector } from "../../redux/findusers-selectors";

class FindUsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.countUsersPage);
    }

    onPageChanged = (numPage) => {
        this.props.requestUsers(numPage, this.props.countUsersPage);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader preloaderImg="../../accets/fake-ava.png" preloaderStyle={{ width: "120px" }} />
                ) : (
                    <FindUsers
                        totalUsersCount={this.props.totalUsersCount}
                        countUsersPage={this.props.countUsersPage}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        togleFollow={this.props.togleFollow}
                        followButtons={this.props.followButtons}
                    />
                )}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        countUsersPage: getCountUsersPage(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followButtons: getFollowButtons(state),
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    togleFetching,
    togleFollow,
    requestUsers,
})(FindUsersAPIComponent);
