import React from 'react';
import { ChatContainer, Message } from './StyledComponents';

function ChatWindow({ messages }) {
    return (
        <ChatContainer>
            {messages.map((msg, index) => (
                <Message key={index}>
                    <strong>{msg.username}</strong> ({msg.time}): {msg.text}
                </Message>
            ))}
        </ChatContainer>
    );
}

export default ChatWindow;