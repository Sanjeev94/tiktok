import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-mern--backend0.herokuapp.com/",
});

export default instance;