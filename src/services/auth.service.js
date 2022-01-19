import axios from "axios";
// import authHeader from "./auth-header";

//refactor -> ersätt API_URL med axios.defaults.baseURL
const API_URL = "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api/auth/";

/*axios.defaults.headers.post["Access-Control-Allow-Origin"] = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Credentials"] = true;
axios.defaults.headers.post["Access-Control-Allow-Headers"] = "*";
axios.defaults.headers.post["Access-Control-Allow-Methods"] = "*";
axios.defaults.headers.post["Authorization"] = authHeader();*/

const register = (username, password, passwordConfirm) => {
    return axios.post(API_URL + "signup", null, {
        params: {
            username,
            password,
            passwordConfirm,
        },
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.headers.authorization) {
                localStorage.setItem("user", JSON.stringify(response.headers.authorization));
                console.log(JSON.stringify(response.headers.authorization));
            }
            return response.headers.authorization;
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
