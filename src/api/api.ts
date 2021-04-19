import axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/"
const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "92cf59a3-3b12-407b-a573-626b86aed9d2" }
});


export const getUsers = (currentPage: any = 1, pageSize: any = 10) => { //!<<<<<<<<<<<<<<<<<<---------------types
    return instance.get(
        baseUrl + `users?page=${currentPage}&count=${pageSize}`
    ).then(response => response.data)
}
