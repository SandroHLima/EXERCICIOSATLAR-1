import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  @media (max-width: 600px) {
    max-width: 90%;
    padding: 10px;
  }
`;

export const PhotoCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.danger ? '#ff4d4d' : '#007bff')};
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.danger ? '#cc0000' : '#0056b3')};
  }
  @media (max-width: 600px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  margin: 5px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  @media (max-width: 600px) {
    padding: 6px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 8px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  @media (max-width: 600px) {
    padding: 6px;
    font-size: 14px;
  }
`;