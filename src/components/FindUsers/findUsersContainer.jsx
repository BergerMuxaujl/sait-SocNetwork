import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togleFetching, unfollow, togleFollow, requestUsers } from "./../../redux/findusers-Reducer";
import s from "./findUsers.module.css";
import React from "react";
import Preloader from "./preloader";
import { getCountUsersPage, getCurrentPage, getFollowButtons, getIsFetching, getTotalUsersCount, getUsersSelector } from "../../redux/findusers-selectors";
import Paginator from "./paginator";
import Users from "./Users";

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
                <div className={s.wrapperUsers}>
                    <Paginator
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        countUsersPage={this.props.countUsersPage}
                        portionSize={10}
                    />
                    {this.props.isFetching ? (
                        <Preloader preloaderImg="../../accets/fake-ava.png" preloaderStyle={{ width: "120px" }} />
                    ) : (
                        <Users users={this.props.users} followButtons={this.props.followButtons} unfollow={this.props.unfollow} follow={this.props.follow} />
                    )}
                </div>
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
