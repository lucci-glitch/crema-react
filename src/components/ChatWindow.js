import React from "react";
import Message from "./Message";
import ActionBar from "./ActionBar";

let items = [
    "Jelly chocolate cake gummi bears apple pie jelly beans candy. Tootsie roll lollipop wafer topping toffee. Icing bonbon chocolate bar jelly beans soufflé topping croissant carrot cake.",
    "Jelly chocolate cake gummi bears apple pie jelly beans candy. Tootsie roll lollipop wafer topping toffee.",
    "Jelly chocolate cake gummi bears apple pie jelly beans candy.",
    "Croissant cheesecake chocolate bar chocolate bonbon gingerbread.",
    "Soufflé jelly beans toffee donut halvah fruitcake dessert cupcake.",
    "Hodor. Hodor hodor, hodor...",
];

const ChatWindow = () => {
    const [messages, setMessages] = React.useState(["Hej! Vad har du för symptom?"]);

    const sendMessageToChat = (message) => {
        setMessages((messages) => [...messages, message]);
    };

    return (
        <>
            <div className="Chat-window">
                <h1>Chat window</h1>
                {messages.map((message, index) => {
                    return <Message key={index} text={message}></Message>;
                })}
            </div>
            <ActionBar sendMessageToChat={sendMessageToChat}></ActionBar>
        </>
    );
};

export default ChatWindow;
