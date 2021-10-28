import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togleFetching, unfollow } from "./../../redux/findusers-Reducer";
import FindUsers from "./findUsers";
import * as axios from "axios";
import React from "react";

import Preloader from "./preloader";

class FindUsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.togleFetching(false);
        });
    }

    onPageChanged = (num) => {
        this.props.togleFetching(true);
        this.props.setCurrentPage(num);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`).then((response) => {
            this.props.setUsers(response.data.items);
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
                    />
                )}
            </>
        );
    }
}
{
}

let mapStateToProps = (state) => {
    return {
        users: state.findusersPage.users,
        totalUsersCount: state.findusersPage.totalUsersCount,
        countUsersPage: state.findusersPage.countUsersPage,
        currentPage: state.findusersPage.currentPage,
        isFetching: state.findusersPage.isFetching,
    };
};

const FindUsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    togleFetching,
})(FindUsersAPIComponent);

export default FindUsersContainer;
