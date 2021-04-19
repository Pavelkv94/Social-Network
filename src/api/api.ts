import axios from "axios";

export const getUsers = (currentPage:any = 1, pageSize:any = 10) => { //!<<<<<<<<<<<<<<<<<<---------------types
    return axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        { withCredentials: true }
    ).then(response=>response.data)
}
