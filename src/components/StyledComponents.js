import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  @media (max-width: 600px) {
    max-width: 90%;
    padding: 10px;
  }
`;

export const ChatContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const Message = styled.div`
  margin: 5px 0;
  text-align: ${props => props.self ? 'right' : 'left'};
  padding: 8px;
  background: ${props => props.self ? '#007bff' : '#e0f7fa'};
  color: ${props => props.self ? 'white' : 'black'};
  border-radius: 4px;
  max-width: 70%;
  margin-left: ${props => props.self ? 'auto' : '0'};
  @media (max-width: 600px) {
    max-width: 90%;
    padding: 6px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  @media (max-width: 600px) {
    width: 60%;
    padding: 8px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #0056b3;
  }
  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  @media (max-width: 600px) {
    padding: 8px;
    font-size: 14px;
  }
`;