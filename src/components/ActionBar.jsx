import React from "react";

const CLEAN_SLATE = "";

const ActionBar = ({ sendMessageToChat }) => {
    const [message, setMessage] = React.useState(CLEAN_SLATE);

    function handleChange(event) {
        setMessage({ value: event.target.value });
    }

    const handleSubmit = () => {
        sendMessageToChat(message.value);
        setMessage({ value: CLEAN_SLATE });
    };

    return (
        <div className="action-bar">
            <input value={message.value} type="text" id="Client-input" onChange={handleChange} />
            <button
                type="submit"
                onClick={() => {
                    handleSubmit();
                }}
            >
                skicka
            </button>
        </div>
    );
};

export default ActionBar;
