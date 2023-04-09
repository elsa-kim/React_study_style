import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  /* props로 넣어준 값 직접 전달 가능 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /*  & 문자 사용해 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(225, 225, 225, 0.9);
  }

  /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해줌 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  &+button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
