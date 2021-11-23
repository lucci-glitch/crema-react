import './App.css';
import GetRandomQuote from "./components/GetRandomQuote";
import NavBar from "./components/NavBar"
import ChatRoom from "./views/ChatRoom"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ChatRoom></ChatRoom>
      <GetRandomQuote></GetRandomQuote>
    </div>
  );
}

export default App;
