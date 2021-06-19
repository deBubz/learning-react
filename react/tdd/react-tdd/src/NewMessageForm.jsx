import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [msg, setMsg] = useState('');

    const handleMsg = (e) => setMsg(e.target.value);
    const handleSend = () => {
        onSend(msg);
        setMsg((e) => {
            console.log(e);
            return '';
        });
    };

    return (
        <div>
            <input type="text" data-testid="messageText" value={msg} onChange={handleMsg} />
            <button data-testid="sendButton" onClick={handleSend}>
                Send
            </button>
        </div>
    );
};

export default NewMessageForm;
