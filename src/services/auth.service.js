import axios from "axios";

const API_URL = "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api/auth/";

const register = (username, password, passwordConfirm) => {
    return axios.post(API_URL + "signup",null, {
        params:{
            username,
            password,
            passwordConfirm,
        }
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
