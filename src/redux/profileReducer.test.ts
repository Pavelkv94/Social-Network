import { addPostActionCreator, profileReducer, ProfileStateType, setStatus, setUserProfile } from "./profileReducer";

let state: ProfileStateType;

beforeEach(() => {
    state = {
        postData: [
            { id: "1", message: "My first post", src: "https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg", likeCount: "23" },
            { id: "2", message: "Hey friends!!!", src: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg", likeCount: "12" },
            { id: "4", message: "very very good job", src: "https://pictureholiday.ru/wp-content/uploads/2018/05/lrdh7n2l4l0.jpg", likeCount: "32" },
            { id: "5", message: "My second post", src: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg", likeCount: "4" },
        ],
        profileData: null,
        status: "",
    }
})

test('test addPost', () => {
    let action = addPostActionCreator('IT-KAMASUTRA.COM');
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(5)
});

test('test setUser', () => {
    let profile = {
        "aboutMe": null,
        "contacts": {
            "facebook": null,
            "website": null,
            "vk": null,
            "twitter": null,
            "instagram": null,
            "youtube": null,
            "github": null,
            "mainLink": null,
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": null,
        "fullName": "string,",
        "userId": 123,
        "photos": { small: "", large: "" }
    }
    let action = setUserProfile(profile)
    let newState = profileReducer(state, action)
    expect(newState.profileData).toBe(profile)
});

test('test setStatus', () => {
    let action = setStatus('IT-KAMASUTRA.COM');
    let newState = profileReducer(state, action)
    expect(newState.status).toBe('IT-KAMASUTRA.COM')
});


