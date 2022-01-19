import React from "react";
import Login from "../components/Login";

const LoginPage = () => {
    return (
        <main className="form-page">
            <div className="login-container">
                <Login></Login>
            </div>
        </main>
    );
};

export default LoginPage;

//Testa att lägga Login komponenten rätt här, kan hända att exporten 
// gör att props inte fungerar
