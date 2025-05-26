import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const NoteCard = styled.div`
  background:rgb(182, 174, 174);
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  background: ${(props) => (props.danger ? "#ff4d4d" : "#a235ea")};
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.danger ? "#cc0000" : "#0056b3")};
  }
`;

export const Input = styled.input`
  padding: 8px;
  margin: 5px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  padding: 8px;
  margin: 5px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`;
