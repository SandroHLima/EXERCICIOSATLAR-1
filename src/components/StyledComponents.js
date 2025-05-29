import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  @media (max-width: 600px) {
    max-width: 90%;
    padding: 10px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
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
    width: 100%;
    margin-right: 0;
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
    width: 100%;
    padding: 8px;
    font-size: 14px;
  }
`;

export const WeatherCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Loading = styled.div`
  font-style: italic;
  color: #666;
`;