const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const setUsers = "SET_USERS";
const setTotalUsersCount = "SET_TOTAL_USERS_COUNT";
const setCurrentPage = "SET_CURRENT_PAGE";

let initialState = {
    users: [],
    countUsersPage: 99,
    totalUsersCount: 1,
    currentPage: 1,
};

let findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow: {
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.userId ? { ...user, followed: true } : user)),
            };
        }
        case unfollow: {
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.userId ? { ...user, followed: false } : user)),
            };
        }
        case setUsers: {
            return { ...state, users: action.users };
        }
        case setTotalUsersCount: {
            return { ...state, totalUsersCount: action.totalUsersCount };
        }
        case setCurrentPage: {
            return { ...state, currentPage: action.currentPage };
        }
        default:
            return state;
    }
};

export let followAC = (userId) => ({ type: follow, userId: userId });
export let unfollowAC = (userId) => ({ type: unfollow, userId: userId });
export let setUsersAC = (users) => ({ type: setUsers, users: users });
export let setTotalUsersCountAC = (totalUsersCount) => ({ type: setTotalUsersCount, totalUsersCount: totalUsersCount });
export let setCurrentPageAC = (currentPage) => ({ type: setCurrentPage, currentPage: currentPage });

export default findUsersReducer;
