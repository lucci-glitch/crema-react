import React from "react";
import ChatWindow from "../components/ChatWindow";
import AuthService from "../services/auth.service";

const ChatRoom = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <main className="chat-room">
            <div className="chat-container">
                <ChatWindow></ChatWindow>
            </div>
        </main>
    );
};

export default ChatRoom;
