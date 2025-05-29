import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 5px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background: ${props => props.danger ? '#ff4d4d' : '#007bff'};
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${props => props.danger ? '#cc0000' : '#0056b3'};
  }
`;

export const FilterContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const NoteList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const Note = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
`;