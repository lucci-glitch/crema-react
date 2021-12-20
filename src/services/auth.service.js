import axios from "axios";
import authHeader from "./auth-header";

//refactor -> ersätt API_URL med axios.defaults.baseURL
const API_URL = "http://localhost:8080/api/auth/";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Credentials"] = true;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Access-Control-Allow-Headers"] = "*";
axios.defaults.headers.post["Access-Control-Allow-Methods"] = "*";
axios.defaults.headers.post["Authorization"] = authHeader();

const register = (username, password, passwordConfirm) => {
    return axios.post(API_URL + "signup", {
        username,
        password,
        passwordConfirm,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
