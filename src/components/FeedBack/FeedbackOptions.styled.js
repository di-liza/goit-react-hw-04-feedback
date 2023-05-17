import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 5px;
  /* background-color: #eae747; */
  font-size: 10px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
  :nth-of-type(1) {
    background-color: #2de109;
    &:hover {
      background-color: #00ff15;
    }
  }
  :nth-of-type(2) {
    background-color: #09a4e1;
    &:hover {
      background-color: #208fff;
    }
  }
  :nth-of-type(3) {
    background-color: #e10938;
    &:hover {
      background-color: #ff2550;
    }
  }
`;
