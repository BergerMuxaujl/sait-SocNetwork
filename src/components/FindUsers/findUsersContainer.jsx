import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togleFetching, unfollow, togleFollow, getUsers } from "./../../redux/findusers-Reducer";
import FindUsers from "./findUsers";
import React from "react";
import Preloader from "./preloader";
import { withAuthRedirect } from "../../hoc/auth-Redirect";

class FindUsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countUsersPage);
    }

    onPageChanged = (numPage) => {
        this.props.getUsers(numPage, this.props.countUsersPage);
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

let withAuthRedirectComponent = withAuthRedirect(FindUsersAPIComponent);

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
    getUsers,
})(withAuthRedirectComponent);

export default FindUsersContainer;
