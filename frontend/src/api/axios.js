import axios from "axios";

const api = axios.create({
    baseURL: "https://shahnaz999aqsa.pythonanywhere.com/api",
});

export default api;