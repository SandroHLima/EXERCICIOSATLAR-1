import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import ChatWindow from './components/ChatWindow';
import { Container, Input, Button } from './components/StyledComponents';

const socket = io('http://localhost:3001');

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('User' + Math.floor(Math.random() * 1000)); // Random username

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages(prevMessages => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = { username, text: message, time: new Date().toLocaleTimeString() };
      socket.emit('chat message', msg);
      setMessage('');
    }
  };

  return (
    <Container>
      <h1>Open Chat</h1>
      <ChatWindow messages={messages} />
      <form onSubmit={sendMessage}>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <Button type="submit">Send</Button>
      </form>
    </Container>
  );
}

export default App;