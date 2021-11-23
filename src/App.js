import { useEffect } from 'react';
import './App.css';
import GetRandomQuote from "./components/GetRandomQuote";
import NavBar from "./components/NavBar"
import ChatRoom from "./views/ChatRoom"

const axios = require('axios');

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api"
});

function App() {

  useEffect(() => {
    async function scrape() {
        const response = await client.post("/quotes/scrape");
        console.log(response.data);
    }
    scrape();
}, [])
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <ChatRoom></ChatRoom>
      <GetRandomQuote></GetRandomQuote>
    </div>
  );
}

export default App;
