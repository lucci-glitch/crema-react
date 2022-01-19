import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Admin from "./views/Admin";
import ChatRoom from "./views/ChatRoom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

function App() {
    useEffect(() => {
        async function scrape() {
            // const responseTitle = await client.post("/forumthreads/scrape");
            // console.log(responseTitle);
            // const response = await client.post("/quotes/scrape");
            // console.log(response.data);
        }
        scrape();
    }, []);

    return (
        <div className="app">
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<ChatRoom />} />
                <Route path="/admin" element={<Admin />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

export default App;
