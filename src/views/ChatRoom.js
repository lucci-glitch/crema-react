import React from "react";
import ChatWindow from "../components/ChatWindow";

const ChatRoom = () => {
    return (
        <main className="chat-room">
            <div className="chat-container">
                <ChatWindow></ChatWindow>
            </div>
        </main>
    );
};

export default ChatRoom;
