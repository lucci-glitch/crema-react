import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import ActionBar from "./ActionBar";
import ChatBotEngine from "./ChatbotEngine";
import { MessageObject } from "../models/MessageObject";
import { FinalMessageObject } from "../models/FinalMessageObject";

const axios = require("axios");

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api",
});

const engine = new ChatBotEngine();
const initState = engine.initialize();

const ChatWindow = () => {
    const [messages, setMessages] = useState([initState]);
    const [replying, setReplying] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const replyToMessage = (message) => {
        engine.logStates()

        async function getBodyPartPost() {
            const response = await client.get(`/chat/first`, {
                params: { response: message.text }
            });
            const reply = JSON.stringify(response.data).replace(/"/g, "");
            setReplying(false)
            const messageObject = new MessageObject(reply, "bot")
            setMessages((messages) => [...messages, messageObject])
        }

        async function getTreePost() {
            const response = await client.get(`/chat`, {
                params: { response: message.text }
            });
            const reply = response.data
            setReplying(false)
            if(reply.length > 1){
                const finalMessageObject = new FinalMessageObject(reply[0],reply[1],reply[2],reply[3],"bot")
                setMessages((messages) => [...messages, finalMessageObject])
                engine.backToBody()
            }else{
            const messageObject = new MessageObject(reply[0], "bot")
            setMessages((messages) => [...messages, messageObject])
            }
        }

        if (engine.currentState === "bodypart") {
            getBodyPartPost()
        } else {
            getTreePost()
        }
    }

    async function sendMessageToChat (message) {
        setMessages((messages) => [...messages, message]);
        setReplying(true);
        await sleep(2000);
        replyToMessage(message);
        engine.setStates()
    };

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <>
            <div className="chat-window">
                {Object.keys(messages).map((message, index) => (
                    <Message 
                    key={index} 
                    text={messages[message].text} 
                    url={messages[message].url}
                    text2={messages[message].text2}
                    url2={messages[message].url2}
                    sender={messages[message].sender}></Message>
                ))}

                {replying && <Message text="..." sender="bot" animated="true" ></Message>}
                <div ref={messagesEndRef} />
            </div>
            <ActionBar sendMessageToChat={sendMessageToChat}></ActionBar>
        </>
    );
};

export default ChatWindow;