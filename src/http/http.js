import axios from 'axios';

export const API_URL = 'http://localhost:5000';

export const _api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    // headers: { "Content-Type": "multipart/form-data" },
})

// export const _api = axios.create({
//     withCredentials: true,
//     baseURL: API_URL,
// })