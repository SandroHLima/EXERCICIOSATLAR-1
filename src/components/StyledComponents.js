import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background: ${props => props.danger ? '#ff4d4d' : '#007bff'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${props => props.danger ? '#cc0000' : '#0056b3'};
  }
`;

export const FilterButton = styled.button`
  background: ${props => props.active ? '#0056b3' : '#ddd'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${props => props.active ? '#004d99' : '#ccc'};
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background: ${props => props.completed ? '#e0f7fa' : '#f9f9f9'};
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  cursor: pointer;
`;