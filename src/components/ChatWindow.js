import React, { useEffect, useRef } from "react";
import Message from "./Message";
import ActionBar from "./ActionBar";
import baseUrl from '../apienv';

const ChatWindow = () => {
    const [messages, setMessages] = React.useState(["Hej! Vad har du för symptom?"]);

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }

      useEffect(() => {
        scrollToBottom()
      }, [messages]);

    const replyToMessage = () => {
        const replay = "...";
        setMessages((messages) => [...messages, replay])
    }

    const sendMessageToChat = (message) => {
        setMessages((messages) => [...messages, message]);
        replyToMessage()
    };

    return (
        <>
            <div className="Chat-window">
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
