import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
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
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #218838;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 8px;
    font-size: 14px;
  }
`;

export const RecipeCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  transition: transform 0.2s;
  &:hover {
    transform: ${props => props.onClick ? 'scale(1.05)' : 'none'};
  }
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Loading = styled.div`
  font-style: italic;
  color: #666;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  @media (max-width: 600px) {
    padding: 15px;
    max-height: 90vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #000;
  }
`;

export const Suggestion = styled.div`
  margin-bottom: 20px;
  color: #666;
  font-style: italic;
  span {
    text-decoration: underline;
    &:hover {
      color: #0056b3;
    }
  }
`;