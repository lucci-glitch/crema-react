import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import ActionBar from "./ActionBar";
import ChatBotEngine from "./ChatbotEngine";
import { MessageObject,FinalMessageObject } from "../models/*";
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

    // const replyToMessage = (category, message) => {
    //     async function getPost() {
    //         const response = await client.get(`/quotes/${category}/find`, {
    //             params: { inputMessage: message },
    //         });
    //         const reply = JSON.stringify(response.data.text).replace(/"/g, "");
    //         setReplying(false)
    //         const messageObject = new MessageObject(reply, "bot")
    //         setMessages((messages) => [...messages, messageObject]);
    //     }
    //     getPost();
    // };

    const replyToMessage = (message) => {
        engine.logStates()

        async function getBodyPartPost() {
            const response = await client.get(`/chat/first`, {
                params: { response: message.text }
            });
            const reply = JSON.stringify(response.data).replace(/"[]/g, "");
            setReplying(false)
            const messageObject = new MessageObject(reply, "bot")
            setMessages((messages) => [...messages, messageObject])
            console.log("messageObject")
            console.log(messageObject)
            console.log("-------------")
            console.log("reply")
            console.log(reply)
        }

        async function getTreePost() {
            const response = await client.get(`/chat`, {
                params: { response: message.text }
            });
            console.log(response.data)
            const reply = JSON.stringify(response.data).replace(/",[]/g, "");
            setReplying(false)
            if(reply.length === 4){
                const finalMessageObject = new FinalMessageObject(reply[0],reply[1],reply[2],reply[3],"bot")
                setMessages((messages) => [...messages, finalMessageObject])
            }else{
            const messageObject = new MessageObject(reply, "bot")
            setMessages((messages) => [...messages, messageObject])
            console.log("messageObject")
            console.log(messageObject)
            console.log("-------------")
            console.log("reply")
            console.log(reply)
            }
        }

        if (engine.currentState == "bodypart") {
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
                    <Message key={index} text={messages[message].text} sender={messages[message].sender}></Message>
                ))}
                {replying && <Message text="..." sender="bot" animated="true" ></Message>}
                <div ref={messagesEndRef} />
            </div>
            <ActionBar sendMessageToChat={sendMessageToChat}></ActionBar>
        </>
    );
};

export default ChatWindow;