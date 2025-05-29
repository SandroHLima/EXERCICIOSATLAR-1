import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  @media (max-width: 500px) {
    max-width: 90%;
    padding: 10px;
  }
`;

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  margin: 20px auto;
  width: 310px;
  position: relative;
  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 25vw);
    width: 78vw;
    gap: 2px;
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(3, 20vw);
    width: 62vw;
  }
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
  @media (max-width: 500px) {
    height: 25vw;
    width: 25vw;
    font-size: 5vw;
  }
  @media (max-width: 350px) {
    height: 20vw;
    width: 20vw;
    font-size: 4vw;
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
  font-size: 16px;
  &:hover {
    background: #0056b3;
  }
  @media (max-width: 500px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const Status = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const WinningLine = styled.div`
  position: absolute;
  background: red;
  height: 5px;
  width: ${props => {
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
            5: [centerOffset + 2 * (squareSize + gap), centerOffset + squareSize + gap],
            6: [centerOffset, centerOffset + 2 * (squareSize + gap)],
            7: [centerOffset + squareSize + gap, centerOffset + 2 * (squareSize + gap)],
            8: [centerOffset + 2 * (squareSize + gap), centerOffset + 2 * (squareSize + gap)],
        };
        const startX = positions[start][0];
        const startY = positions[start][1];
        const endX = positions[end][0];
        const endY = positions[end][1];
        const dx = endX - startX;
        const dy = endY - startY;
        return Math.sqrt(dx * dx + dy * dy);
    }}px;
  transform: ${props => {
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
            5: [centerOffset + 2 * (squareSize + gap), centerOffset + squareSize + gap],
            6: [centerOffset, centerOffset + 2 * (squareSize + gap)],
            7: [centerOffset + squareSize + gap, centerOffset + 2 * (squareSize + gap)],
            8: [centerOffset + 2 * (squareSize + gap), centerOffset + 2 * (squareSize + gap)],
        };
        const startX = positions[start][0];
        const startY = positions[start][1];
        const endX = positions[end][0];
        const endY = positions[end][1];
        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
        return `translate(${startX}px, ${startY}px) rotate(${angle}deg)`;
    }};
  transform-origin: 0 0;
  z-index: 10;
  @media (max-width: 500px) {
    height: 4px;
    width: ${props => {
        const [start, , end] = props.positions;
        const squareSize = 25; // vw
        const gap = 2; // px
        const centerOffset = squareSize / 2;
        const positions = {
            0: [centerOffset, centerOffset],
            1: [centerOffset + squareSize + gap, centerOffset],
            2: [centerOffset + 2 * (squareSize + gap), centerOffset],
            3: [centerOffset, centerOffset + squareSize + gap],
            4: [centerOffset + squareSize + gap, centerOffset + squareSize + gap],
            5: [centerOffset + 2 * (squareSize + gap), centerOffset + squareSize + gap],
            6: [centerOffset, centerOffset + 2 * (squareSize + gap)],
            7: [centerOffset + squareSize + gap, centerOffset + 2 * (squareSize + gap)],
            8: [centerOffset + 2 * (squareSize + gap), centerOffset + 2 * (squareSize + gap)],
        };
        const startX = positions[start][0] * 4; // Convert vw to px approximation
        const startY = positions[start][1] * 4;
        const endX = positions[end][0] * 4;
        const endY = positions[end][1] * 4;
        const dx = endX - startX;
        const dy = endY - startY;
        return Math.sqrt(dx * dx + dy * dy);
    }}px;
    transform: ${props => {
        const [start, , end] = props.positions;
        const squareSize = 25; // vw
        const gap = 2; // px
        const centerOffset = squareSize / 2;
        const positions = {
            0: [centerOffset, centerOffset],
            1: [centerOffset + squareSize + gap, centerOffset],
            2: [centerOffset + 2 * (squareSize + gap), centerOffset],
            3: [centerOffset, centerOffset + squareSize + gap],
            4: [centerOffset + squareSize + gap, centerOffset + squareSize + gap],
            5: [centerOffset + 2 * (squareSize + gap), centerOffset + squareSize + gap],
            6: [centerOffset, centerOffset + 2 * (squareSize + gap)],
            7: [centerOffset + squareSize + gap, centerOffset + 2 * (squareSize + gap)],
            8: [centerOffset + 2 * (squareSize + gap), centerOffset + 2 * (squareSize + gap)],
        };
        const startX = positions[start][0] * 4; // Convert vw to px approximation
        const startY = positions[start][1] * 4;
        const endX = positions[end][0] * 4;
        const endY = positions[end][1] * 4;
        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
        return `translate(${startX}px, ${startY}px) rotate(${angle}deg)`;
    }};
  }
  @media (max-width: 350px) {
    height: 3px;
    width: ${props => {
        const [start, , end] = props.positions;
        const squareSize = 20; // vw
        const gap = 2; // px
        const centerOffset = squareSize / 2;
        const positions = {
            0: [centerOffset, centerOffset],
            1: [centerOffset + squareSize + gap, centerOffset],
            2: [centerOffset + 2 * (squareSize + gap), centerOffset],
            3: [centerOffset, centerOffset + squareSize + gap],
            4: [centerOffset + squareSize + gap, centerOffset + squareSize + gap],
            5: [centerOffset + 2 * (squareSize + gap), centerOffset + squareSize + gap],
            6: [centerOffset, centerOffset + 2 * (squareSize + gap)],
            7: [centerOffset + squareSize + gap, centerOffset + 2 * (squareSize + gap)],
            8: [centerOffset + 2 * (squareSize + gap), centerOffset + 2 * (squareSize + gap)],
        };
        const startX = positions[start][0] * 5; // Convert vw to px approximation
        const startY = positions[start][1] * 5;
        const endX = positions[end][0] * 5;
        const endY = positions[end][1] * 5;
        const dx = endX - startX;
        const dy = endY - startY;
        return Math.sqrt(dx * dx + dy * dy);
    }}px;
    transform: ${props => {
        const [start, , end] = props.positions;
        const squareSize = 20; // vw
        const gap = 2; // px
        const centerOffset = squareSize / 2;
        const positions = {
            0: [centerOffset, centerOffset],
            1: [centerOffset + squareSize + gap, centerOffset],
            2: [centerOffset + 2 * (squareSize + gap), centerOffset],
            3: [centerOffset, centerOffset + squareSize + gap],
            4: [centerOffset + squareSize + gap, centerOffset + squareSize + gap],
            5: [centerOffset + 2 * (squareSize + gap), centerOffset + squareSize + gap],
            6: [centerOffset, centerOffset + 2 * (squareSize + gap)],
            7: [centerOffset + squareSize + gap, centerOffset + 2 * (squareSize + gap)],
            8: [centerOffset + 2 * (squareSize + gap), centerOffset + 2 * (squareSize + gap)],
        };
        const startX = positions[start][0] * 5; // Convert vw to px approximation
        const startY = positions[start][1] * 5;
        const endX = positions[end][0] * 5;
        const endY = positions[end][1] * 5;
        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
        return `translate(${startX}px, ${startY}px) rotate(${angle}deg)`;
    }};
  }
`;