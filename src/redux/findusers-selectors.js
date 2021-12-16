import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.findusersPage.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter((u) => true);
});

export const getTotalUsersCount = (state) => {
    return state.findusersPage.totalUsersCount;
};

export const getCountUsersPage = (state) => {
    return state.findusersPage.countUsersPage;
};

export const getCurrentPage = (state) => {
    return state.findusersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.findusersPage.isFetching;
};

export const getFollowButtons = (state) => {
    return state.findusersPage.followButtons;
};
