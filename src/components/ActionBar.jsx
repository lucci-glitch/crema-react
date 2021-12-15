import React, { useState } from "react";
import { MessageObject } from "../models/MessageObject";

const CLEAN_SLATE = "";

const ActionBar = ({ sendMessageToChat }) => {
    const [message, setMessage] = useState(CLEAN_SLATE);
    const [disabled, setDisabled] = useState(true)

    function handleChange(event) {
        setMessage({ value: event.target.value });
        if ("" !== event.target.value) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const object = new MessageObject(message.value, "user")
        sendMessageToChat(object);
        setMessage({ value: CLEAN_SLATE });
        setDisabled(true);
    };

    return (
        <form className="action-bar" onSubmit={handleSubmit}>
            <input value={message.value} type="text" id="Client-input" onChange={handleChange} />
            <button type="submit" disabled={disabled}>
                Skicka
            </button>
        </form>
    );
};

export default ActionBar;
