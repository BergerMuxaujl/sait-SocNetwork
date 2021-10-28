const followAT = "FOLLOW";
const unfollowAT = "UNFOLLOW";
const setUsersAT = "SET_USERS";
const setTotalUsersCountAT = "SET_TOTAL_USERS_COUNT";
const setCurrentPageAT = "SET_CURRENT_PAGE";
const togleFetchingAT = "SET_TOOGLE_FETHING";

let initialState = {
    users: [],
    countUsersPage: 99,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
};

let findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case followAT: {
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.userId ? { ...user, followed: true } : user)),
            };
        }
        case unfollowAT: {
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.userId ? { ...user, followed: false } : user)),
            };
        }
        case setUsersAT: {
            return { ...state, users: action.users };
        }
        case setTotalUsersCountAT: {
            return { ...state, totalUsersCount: action.totalUsersCount };
        }
        case setCurrentPageAT: {
            return { ...state, currentPage: action.currentPage };
        }
        case togleFetchingAT: {
            return { ...state, isFetching: action.isFetching };
        }
        default:
            return state;
    }
};

export let follow = (userId) => ({ type: followAT, userId: userId });
export let unfollow = (userId) => ({ type: unfollowAT, userId: userId });
export let setUsers = (users) => ({ type: setUsersAT, users: users });
export let setTotalUsersCount = (totalUsersCount) => ({ type: setTotalUsersCountAT, totalUsersCount: totalUsersCount });
export let setCurrentPage = (currentPage) => ({ type: setCurrentPageAT, currentPage: currentPage });
export let togleFetching = (isFetching) => ({ type: togleFetchingAT, isFetching: isFetching });

export default findUsersReducer;
