import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  max-width: 500px;
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

// Widget-specific styles
export const WidgetContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  margin: 20px auto;
  text-align: center;
  border: 1px solid #e0e0e0;
`;

export const WeatherCard = styled.div`
padding-top:18px;
  h3 {
    margin: 0 0 10px;
    font-size: 18px;
    color: #333;
  }
  p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  }
`;

export const Loading = styled.div`
  font-style: italic;
  color: #666;
  font-size: 14px;
`;

// New styles for widget search bar
export const WidgetInput = styled.input`
  padding: 6px;
  margin-right: 5px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
`;

export const WidgetButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background: #0056b3;
  }
`;