import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "a75ca69e-11c9-4fb1-b265-ac7ff31550a1" }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then((response: AxiosResponse<any>) => response.data)
    },
    getFollow(userId: number | null) {
        return instance.post(`follow/${userId}`, {}
        )
    },
    getUnFollow(userId: number | null) {
        return instance.delete(`follow/${userId}`
        )
    },

}


export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: number | null) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status });
    }
}

//авторизация
export enum ResultCodeENum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
//generyc
type MeResponseTypes<T> = {
    resultCode: ResultCodeENum | ResultCodeForCaptcha
    messages: Array<string>
    data: T
}
type DataMeResponseType = {
    id: number,
    email: string
    login: string
}
type DataLoginResponseType = {
    userId: number
}
type DataLogoutResponseType = {}
export const authAPI = {
    me() {
        return instance.get<MeResponseTypes<DataMeResponseType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<MeResponseTypes<DataLoginResponseType>>(`auth/login`, { email, password, rememberMe }).then(res => res.data);
    },
    logout() {
        return instance.delete<MeResponseTypes<DataLogoutResponseType>>(`auth/login`).then(res => res.data);;
    }
}

