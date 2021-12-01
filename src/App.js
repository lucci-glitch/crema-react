import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatRoom from "./views/ChatRoom";

const axios = require("axios");

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api",
});

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
        <div className="App">
            <NavBar></NavBar>
            <ChatRoom></ChatRoom>
        </div>
    );
}

export default App;
