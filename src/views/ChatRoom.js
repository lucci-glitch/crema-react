import React from "react";
import ChatWindow from "../components/ChatWindow";
import AuthService from "../services/auth.service";

const ChatRoom = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <main className="chat-room">
            <div className="chat-container">
                <h1>Hej insert username!</h1>
                <ChatWindow></ChatWindow>
            </div>
        </main>
    );
};

export default ChatRoom;
