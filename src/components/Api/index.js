import axios from "axios";

const Main_Url= axios.create({
    baseURL: "https://ecommerceapi.firdavsdev.uz"
})
Main_Url.interceptors.request.use((req) => {
    const token = localStorage.getItem('x-auth/token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
})
export default Main_Url;