import React from 'react';

const MessageList = ({ data }) => {
    return (
        <ul>
            {data.map((e, i) => (
                <li key={i}>{e}</li>
            ))}
        </ul>
    );
};

export default MessageList;
