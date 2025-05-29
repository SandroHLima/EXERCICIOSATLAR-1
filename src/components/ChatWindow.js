import React, { forwardRef } from 'react';
import { ChatContainer, Message } from './StyledComponents';

const ChatWindow = forwardRef(({ messages }, ref) => {
    return (
        <ChatContainer ref={ref}>
            {messages.map((msg, index) => (
                <Message key={index} self={msg.username === localStorage.getItem('chatUsername')}>
                    <strong>{msg.username}</strong> ({msg.time}): {msg.text}
                </Message>
            ))}
        </ChatContainer>
    );
});

export default ChatWindow;