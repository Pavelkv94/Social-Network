import { dialogsReducer, DialogsStateType, sendMessageCreator } from "./dialogsReducer";


let state: DialogsStateType;

beforeEach(() => {
    state = {
        dialogsData: [
            { id: "1", name: "Anna" },
            { id: "2", name: "Dimych" },
            { id: "3", name: "Kelvin" },
            { id: "4", name: "Eliza" },
            { id: "5", name: "Matt" },
            { id: "6", name: "Connor" }
        ],
        messagesData: [
            { id: "1", message: "hi" },
            { id: "2", message: "How are you?" },
            { id: "3", message: "It's cool!!" },
            { id: "4", message: "Nice!" },
            { id: "5", message: " " },
            { id: "6", message: "Im sexy" },
        ],
    }
})

test('test dialogsReducer', () => {
    let action = sendMessageCreator('newMessage')
    let newState = dialogsReducer(state, action)
    expect(newState.messagesData.length).toBe(7)
});