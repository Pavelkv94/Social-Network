import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "92cf59a3-3b12-407b-a573-626b86aed9d2" }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    getUnFollow(userId: number = 1) {
        return instance.delete(`follow/${userId}`
        ).then(response => response.data)
    },
    getFollow(userId: number = 1) {
        return instance.post(`follow/${userId}`, {}
        ).then(response => response.data)
    },
    //! ошибка с картинкой
    getProfile(userId: string = "1") {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
}

export const profileAPI = {
    //! ошибка с картинкой
    getProfile(userId: string = "1") {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: string = "1") {
        return instance.get(`status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`status`, { status: status })
    }
}
