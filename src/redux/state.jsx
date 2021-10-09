import { renderedEntireTree } from "../render";

let state = {
    dialogsData: [
        { id: 0, name: "Angela" },
        { id: 1, name: "Nikita" },
        { id: 2, name: "Alisa" },
    ],
    messageData: [
        { id: 0, message: "Privet!" },
        { id: 1, message: "Che delaesh?" },
        { id: 2, message: "Zdarova!" },
    ],
    postData: [
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
};

export let addPost = (txt) => {
    state.postData.push({
        id: state.postData.length + 1,
        Title: "New post",
        likes: 0,
        text: txt,
    });
    renderedEntireTree(state);
};

export default state;
