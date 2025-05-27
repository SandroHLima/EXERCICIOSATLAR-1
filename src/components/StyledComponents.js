import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const ChatContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background: #f9f9f9;
`;

export const Message = styled.div`
  margin: 5px 0;
  text-align: left;
  padding: 5px;
  background: #e0f7fa;
  border-radius: 4px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;