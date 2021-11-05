import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "6ebe572b-de33-44d1-98a1-7c98602ea5a3" },
});

export const usersAPI = {
    getUsers(currentPage = 1, countUsersPage = 99) {
        return instance.get(`users?page=${currentPage}&count=${countUsersPage}`).then((response) => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then((responce) => responce.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then((responce) => responce.data);
    },
};

export const authAPI = {
    authMe() {
        return instance.get("auth/me").then((responce) => responce.data);
    },
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },
};
