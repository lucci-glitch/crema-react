import React, { useEffect, useRef } from "react";
import Message from "./Message";
import ActionBar from "./ActionBar";

const axios = require("axios");

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api",
});

const ChatWindow = () => {
    const [messages, setMessages] = React.useState(["Hej! Vad har du för symptom?"]);
    const [chatState, setChatState] = React.useState("greeting");

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Ta in category beroende på chatbot state
    const replyToMessage = (category, message) => {
        async function getPost() {
            const response = await client.get(`/quotes/${category}/find`, {
                params: { inputMessage: message },
            });
            const reply = JSON.stringify(response.data.text).replace(/"/g, "");
            const timer = setTimeout(() => {
                setMessages((messages) => [...messages, reply]);
            }, 1000);
            return () => clearTimeout(timer);
        }
        getPost();
    };

    const sendMessageToChat = (message) => {
        //Lägger till användarens meddelande i chatten
        setMessages((messages) => [...messages, message]);

        //Kolla chatbot state
        let category = "";
        switch (chatState) {
            case "greeting":
                category = "question";
                setChatState("question");
                break;
            default:
                setChatState("statement");
                category = "statement";
                break;
        }
        // Hämtar ett svar från backend
        replyToMessage(category, message);
    };

    return (
        <>
            <div className="chat-window">
                <h1>Chat window</h1>
                {messages.map((message, index) => {
                    return <Message key={index} text={message}></Message>;
                })}
                <div ref={messagesEndRef} />
            </div>
            <ActionBar sendMessageToChat={sendMessageToChat}></ActionBar>
        </>
    );
};

export default ChatWindow;
