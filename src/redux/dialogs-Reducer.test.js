import dialogsReducer, { sendMessage } from "./dialogs-Reducer";

it("new message", () => {
    let state = {
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
    };

    let action = sendMessage("new test message");

    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(4);
});
