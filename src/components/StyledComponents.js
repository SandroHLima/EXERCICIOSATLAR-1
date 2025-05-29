import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    max-width: 90%;
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const ForgotPasswordForm = styled.form`
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-in-out;
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
  @media (max-width: 600px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  transition: background 0.3s, transform 0.2s;
  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const Message = styled.div`
  margin-top: 10px;
  color: #dc3545;
  font-weight: bold;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const SwitchButton = styled.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 20px;
  transition: background 0.3s;
  &:hover {
    background: #5a6268;
  }
  @media (max-width: 600px) {
    padding: 8px;
    font-size: 12px;
  }
`;