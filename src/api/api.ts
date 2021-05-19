import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    //headers: { "API-KEY": "92cf59a3-3b12-407b-a573-626b86aed9d2" }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    getUnFollow(userId: number | null) {
        return instance.delete(`follow/${userId}`
        )//.then(response => response.data)
    },
    getFollow(userId: number | null) {
        return instance.post(`follow/${userId}`, {}
        )//.then(response => response.data)
    },
    getProfile(userId: number | null) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);
    },
}


export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number | null) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status })
    }
}

//авторизация
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

