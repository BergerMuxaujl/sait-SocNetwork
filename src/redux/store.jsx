const ADD_POST = "ADD-POST";
const UPDATE_NEWPOST = "UPDATE-NEWPOST";

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
        if (action.type === "ADD-POST") {
            this._state.profilePage.posts.push({
                id: this._state.profilePage.posts.length + 1,
                Title: "New post",
                likes: 0,
                text: this._state.profilePage.newPostText,
            });
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEWPOST") {
            this._state.profilePage.newPostText = action.txt;
            this._callSubscriber(this._state);
        }
    },
};

export const AddPostActionCreator = () => ({ type: ADD_POST });
export const UpdateNewpostActionCreator = (text) => ({ type: UPDATE_NEWPOST, txt: text });

export default store;
