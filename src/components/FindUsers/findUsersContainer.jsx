import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togleFetching, unfollow, togleFollow } from "./../../redux/findusers-Reducer";
import FindUsers from "./findUsers";
import React from "react";
import Preloader from "./preloader";
import { usersAPI } from "../../api/api";

class FindUsersAPIComponent extends React.Component {
    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.countUsersPage).then((response) => {
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
            this.props.togleFetching(false);
        });
    }

    onPageChanged = (num) => {
        this.props.togleFetching(true);
        this.props.setCurrentPage(num);
        usersAPI.getUsers(this.props.currentPage, this.props.countUsersPage).then((response) => {
            this.props.setUsers(response.items);
            this.props.togleFetching(false);
        });
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
        users: state.findusersPage.users,
        totalUsersCount: state.findusersPage.totalUsersCount,
        countUsersPage: state.findusersPage.countUsersPage,
        currentPage: state.findusersPage.currentPage,
        isFetching: state.findusersPage.isFetching,
        followButtons: state.findusersPage.followButtons,
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
})(FindUsersAPIComponent);

export default FindUsersContainer;
