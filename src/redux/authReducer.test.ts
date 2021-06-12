import { authReducer, InitialAuthType, setAuthUserData } from "./authReducer";

let state: InitialAuthType;

beforeEach(() => {
    state = {
        id: null,
        login: null,
        email: null,
        isAuth: false,
    }
})

test('test authReducer', () => {
    let action = setAuthUserData(1, "test", "test@mail.ru", true);
    let newState = authReducer(state, action)
    expect(newState.id).toBe(1)
    expect(newState.email).toBe("test@mail.ru")
    expect(newState.login).toBe("test")
    expect(newState.isAuth).toBe(true)
});