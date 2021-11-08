import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togleFetching, unfollow, togleFollow, getUsers } from "./../../redux/findusers-Reducer";
import FindUsers from "./findUsers";
import React from "react";
import Preloader from "./preloader";
import { usersAPI } from "../../api/api";
import { Redirect } from "react-router";

class FindUsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countUsersPage);
    }

    onPageChanged = (numPage) => {
        this.props.getUsers(numPage, this.props.countUsersPage);
    };

    render() {
        if (!this.props.isAuth) return <Redirect to="./login" />;

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
        users: state.findusersPage.users,
        totalUsersCount: state.findusersPage.totalUsersCount,
        countUsersPage: state.findusersPage.countUsersPage,
        currentPage: state.findusersPage.currentPage,
        isFetching: state.findusersPage.isFetching,
        followButtons: state.findusersPage.followButtons,
        isAuth: state.auth.isAuth,
    };
};

const FindUsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    togleFetching,
    togleFollow,
    getUsers,
})(FindUsersAPIComponent);

export default FindUsersContainer;
