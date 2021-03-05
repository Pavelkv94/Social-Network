

export type UserType = {
    id: string
    name: string
}

export type UserMessageType = {
    id: string
    message: string
}

export type PostDataType = {
    id: string
    message: string
    src: string
    likeCount: string
}

export type ProfileDataType = {
    background: string
    ava: string
}

export type DialogsType = {
    dialogsData: Array<UserType>
    messagesData: Array<UserMessageType>
}
export type ProfileType = {
    postData: Array<PostDataType>
    newPostText: string
    profileData: Array<ProfileDataType>
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}
export type StateType = {
    dialogs: DialogsType
    profile: ProfileType
}


let rerenderEntireTree = () => {
    console.log("sad")
}
export let state: StateType = {
    dialogs: {
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

    },
    profile: {
        postData: [
            { id: "1", message: "My first post", src: "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg", likeCount: "23" },
            { id: "2", message: "Hey friends!!!", src: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", likeCount: "1" },
            { id: "3", message: "Wow it's cool", src: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", likeCount: "12" },
            { id: "4", message: "very very good job", src: "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg", likeCount: "32" },
            { id: "5", message: "My second post", src: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg", likeCount: "4" },
        ],
        newPostText: "it=kamasutra.com",
        profileData: [
            { background: "https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg", ava: "Ava" }
        ],
        addPost,
        updateNewPostText,
    }
}

//TODO Создаем функцию для добавления нового поста на стену
export function addPost(postMessage: string) {
    let newPost: PostDataType = {
        id: "5",
        message: postMessage,
        src: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg",
        likeCount: "0"
    }
    state.profile.postData.push(newPost);
    rerenderEntireTree();
}

export function updateNewPostText(newText: string) {
    state.profile.newPostText = newText;
    rerenderEntireTree()
}

export function subscribe(observer: () => void) {
    rerenderEntireTree = observer   //Наблюдатель паттерн
}