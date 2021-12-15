import React, { useEffect, useRef } from "react";
import Message from "./Message";
import ActionBar from "./ActionBar";
import ChatBotEngine from "./ChatbotEngine";
const axios = require("axios");

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api",
});

const engine = new ChatBotEngine();
const initState = engine.initialize();

const ChatWindow = () => {
    const [messages, setMessages] = React.useState([initState]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

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
        setMessages((messages) => [...messages, message]);
        const category = engine.getMessageCategory();
        replyToMessage(category, message);
        console.log("category in ChatWindow: " + category);
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
