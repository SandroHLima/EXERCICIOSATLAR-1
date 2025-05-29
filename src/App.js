import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import ChatWindow from './components/ChatWindow';
import { Container, Input, Button, Select } from './components/StyledComponents';

const socket = io('http://localhost:3001', { transports: ['websocket'] });

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [room, setRoom] = useState('general');
  const [notification, setNotification] = useState('');
  const chatWindowRef = useRef(null);

  // Load username from localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem('chatUsername');
    if (savedUsername) {
      setUsername(savedUsername);
      setIsAuthenticated(true);
    }

    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  // Handle socket events and room joining
  useEffect(() => {
    if (isAuthenticated) {
      socket.emit('join room', room);
      console.log(`Client joined room: ${room}`);

      socket.on('chat message', (msg) => {
        console.log('Received message:', msg);
        setMessages(prevMessages => {
          // Avoid duplicates by checking messageId
          if (prevMessages.some(m => m.messageId === msg.messageId)) {
            return prevMessages;
          }
          return [...prevMessages, msg];
        });
        if (msg.room === room && msg.username !== username) {
          setNotification(`New message from ${msg.username} in ${msg.room}`);
          setTimeout(() => setNotification(''), 5000);
        }
        if (chatWindowRef.current) {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
      });

      return () => {
        socket.off('chat message');
        socket.emit('leave room', room);
        console.log(`Client left room: ${room}`);
      };
    }
  }, [room, isAuthenticated]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && isAuthenticated) {
      const msg = {
        username,
        text: message,
        time: new Date().toLocaleTimeString(),
        room,
        messageId: Date.now() + '-' + Math.random().toString(36).substr(2, 9) // Unique ID
      };
      console.log('Sending message:', msg);
      socket.emit('chat message', msg);
      // Optimistically add the message to the local state
      setMessages(prevMessages => {
        if (prevMessages.some(m => m.messageId === msg.messageId)) {
          return prevMessages;
        }
        return [...prevMessages, msg];
      });
      setMessage('');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('chatUsername', username);
      setIsAuthenticated(true);
      socket.emit('join room', room);
    }
  };

  return (
    <Container>
      <h1>Chat Application</h1>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username..."
          />
          <Button type="submit">Join Chat</Button>
        </form>
      ) : (
        <>
          {notification && <div style={{ color: 'red', marginBottom: '10px' }}>{notification}</div>}
          <div style={{ marginBottom: '10px' }}>
            <Select value={room} onChange={(e) => setRoom(e.target.value)}>
              <option value="general">General</option>
              <option value="room1">Room 1</option>
              <option value="room2">Room 2</option>
            </Select>
            <Button onClick={() => setRoom('general')}>Switch to General</Button>
          </div>
          <ChatWindow messages={messages.filter(msg => msg.room === room)} ref={chatWindowRef} />
          <form onSubmit={sendMessage}>
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <Button type="submit">Send</Button>
          </form>
        </>
      )}
    </Container>
  );
}

export default App;