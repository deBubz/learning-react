import React, { useState } from 'react';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

const App = () => {
    const [message, setMessage] = useState([]);
    const handleSend = (newMsg) => {
        setMessage([newMsg, ...message]);
    };

    return (
        <div>
            <NewMessageForm onSend={handleSend} />
            <MessageList data={message} />
        </div>
    );
};

export default App;
