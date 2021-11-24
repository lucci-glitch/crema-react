import React from "react";

const ActionBar = ({ sendMessageToChat }) => {
    const [message, setMessage] = React.useState("");

    function handleChange(event) {
        setMessage({ value: event.target.value });
    }

    return (
        <div className="Action-bar">
            <input type="text" id="Client-input" onChange={handleChange} />
            <button
                type="submit"
                onClick={() => {
                    sendMessageToChat(message.value);
                }}
            >
                skicka
            </button>
        </div>
    );
};

export default ActionBar;
