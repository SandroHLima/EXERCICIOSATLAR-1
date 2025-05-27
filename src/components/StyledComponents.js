import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  margin: 20px auto;
  width: 310px;
  position: relative;
`;

export const SquareButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  font-size: 24px;
  font-weight: bold;
  height: 100px;
  width: 100px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

export const Status = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const WinningLine = styled.div`
  position: absolute;
  background: red;
  height: 5px;
  width: ${(props) => {
    const [start, , end] = props.positions;
    const squareSize = 100;
    const gap = 5;
    const centerOffset = squareSize / 2;
    const positions = {
      0: [centerOffset, centerOffset],
      1: [centerOffset + squareSize + gap, centerOffset],
      2: [centerOffset + 2 * (squareSize + gap), centerOffset],
      3: [centerOffset, centerOffset + squareSize + gap],
      4: [centerOffset + squareSize + gap, centerOffset + squareSize + gap],
      5: [
        centerOffset + 2 * (squareSize + gap),
        centerOffset + squareSize + gap,
      ],
      6: [centerOffset, centerOffset + 2 * (squareSize + gap)],
      7: [
        centerOffset + squareSize + gap,
        centerOffset + 2 * (squareSize + gap),
      ],
      8: [
        centerOffset + 2 * (squareSize + gap),
        centerOffset + 2 * (squareSize + gap),
      ],
    };
    const startX = positions[start][0];
    const startY = positions[start][1];
    const endX = positions[end][0];
    const endY = positions[end][1];
    const dx = endX - startX;
    const dy = endY - startY;
    return Math.sqrt(dx * dx + dy * dy);
  }}px;
  transform: ${(props) => {
    const [start, , end] = props.positions;
    const squareSize = 100;
    const gap = 5;
    const centerOffset = squareSize / 2;
    const positions = {
      0: [centerOffset, centerOffset],
      1: [centerOffset + squareSize + gap, centerOffset],
      2: [centerOffset + 2 * (squareSize + gap), centerOffset],
      3: [centerOffset, centerOffset + squareSize + gap],
      4: [centerOffset + squareSize + gap, centerOffset + squareSize + gap],
      5: [
        centerOffset + 2 * (squareSize + gap),
        centerOffset + squareSize + gap,
      ],
      6: [centerOffset, centerOffset + 2 * (squareSize + gap)],
      7: [
        centerOffset + squareSize + gap,
        centerOffset + 2 * (squareSize + gap),
      ],
      8: [
        centerOffset + 2 * (squareSize + gap),
        centerOffset + 2 * (squareSize + gap),
      ],
    };
    const startX = positions[start][0];
    const startY = positions[start][1];
    const endX = positions[end][0];
    const endY = positions[end][1];
    const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI;
    return `translate(${startX}px, ${startY}px) rotate(${angle}deg)`;
  }};
  transform-origin: 0 0;
  z-index: 10;
`;
