import dialogsReducer from "./dialogs-Reducer";
import profileReducer from "./profile-Reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 0, name: "Angela" },
                { id: 1, name: "Nikita" },
                { id: 2, name: "Alisa" },
            ],
            messages: [
                { id: 0, message: "Privet!" },
                { id: 1, message: "Che delaesh?" },
                { id: 2, message: "Zdarova!" },
            ],
            newMessageText: "",
        },
        profilePage: {
            posts: [
                {
                    id: 0,
                    title: "First post",
                    likes: 5,
                    text: "This is text at first post. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur obcaecati quibusdam ex eum ut minima molestias est adipisci excepturi consequatur? Ipsam aut dicta autem dignissimos, nihil facere consequatur aperiam delectus.",
                },
                {
                    id: 1,
                    title: "Second post",
                    likes: 15,
                    text: "This is text at second post. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur obcaecati quibusdam ex eum ut minima molestias est adipisci excepturi consequatur? Ipsam aut dicta autem dignissimos, nihil facere consequatur aperiam delectus.",
                },
                {
                    id: 2,
                    title: "Third post",
                    likes: 25,
                    text: "This is text at third post. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur obcaecati quibusdam ex eum ut minima molestias est adipisci excepturi consequatur? Ipsam aut dicta autem dignissimos, nihil facere consequatur aperiam delectus.",
                },
            ],
            newPostText: "default text post",
        },
    },
    _callSubscriber() {
        console.log("this is call subscriber");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber();
    },
};

export default store;
