import { usersAPI } from "../api/api";

const followAT = "FOLLOW";
const unfollowAT = "UNFOLLOW";
const setUsersAT = "SET_USERS";
const setTotalUsersCountAT = "SET_TOTAL_USERS_COUNT";
const setCurrentPageAT = "SET_CURRENT_PAGE";
const togleFetchingAT = "SET_TOOGLE_FETHING";
const togleFollowAT = "TOGLE_ FOLLOW";

let initialState = {
    users: [],
    countUsersPage: 99,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followButtons: [],
    fake: 10,
};

let findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Fake":
            return { ...state, fake: state.fake + 1 };

        case followAT:
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.userId ? { ...user, followed: true } : user)),
            };

        case unfollowAT:
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.userId ? { ...user, followed: false } : user)),
            };
        case setUsersAT:
            return { ...state, users: action.users };

        case setTotalUsersCountAT:
            return { ...state, totalUsersCount: action.totalUsersCount };

        case setCurrentPageAT:
            return { ...state, currentPage: action.currentPage };

        case togleFetchingAT:
            return { ...state, isFetching: action.isFetching };

        case togleFollowAT:
            return {
                ...state,
                followButtons: action.isFetching ? [state.followButtons.filter((id) => ~id != action.userId)] : [...state.followButtons, action.userId],
            };

        default:
            return state;
    }
};

export let acceptfollow = (userId) => ({ type: followAT, userId: userId });
export let acceptUnfollow = (userId) => ({ type: unfollowAT, userId: userId });
export let setUsers = (users) => ({ type: setUsersAT, users: users });
export let setTotalUsersCount = (totalUsersCount) => ({ type: setTotalUsersCountAT, totalUsersCount: totalUsersCount });
export let setCurrentPage = (currentPage) => ({ type: setCurrentPageAT, currentPage: currentPage });
export let togleFetching = (isFetching) => ({ type: togleFetchingAT, isFetching: isFetching });
export let togleFollow = (isFetching, userId) => ({ type: togleFollowAT, isFetching: isFetching, userId: userId });

export let requestUsers = (currentPage, countUsersPage) => {
    return (dispatch) => {
        dispatch(togleFetching(true));
        usersAPI.requestUsers(currentPage, countUsersPage).then((response) => {
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(togleFetching(false));
        });
    };
};

export let unfollow = (userId) => {
    return (dispatch) => {
        dispatch(togleFollow(false, userId));
        usersAPI.unfollow(userId).then((response) => {
            dispatch(togleFollow(true, userId));
            if (response.resultCode === 0) {
                dispatch(acceptUnfollow(userId));
            }
        });
    };
};

export let follow = (userId) => {
    return (dispatch) => {
        dispatch(togleFollow(false, userId));
        usersAPI.follow(userId).then((response) => {
            dispatch(togleFollow(true, userId));
            if (response.resultCode === 0) {
                dispatch(acceptfollow(userId));
            }
        });
    };
};

export default findUsersReducer;
