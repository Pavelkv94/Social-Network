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
    getUnFollow(id:number=1) { 
        return instance.delete(`follow/${id}`
        ).then(response => response.data)
    },
    getFollow(id:number=1) { 
        return instance.post(`follow/${id}`,{}
        ).then(response => response.data)
    }
}
