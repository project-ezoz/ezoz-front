import React from "react";
import styled from "styled-components";

export const DeleteButton = () => {
  return <Button>삭제하기</Button>;
};
const Button = styled.div`
  width: 150px;
  font-size: 20px;
  border: 1px solid black;
  cursor: pointer;
`;
