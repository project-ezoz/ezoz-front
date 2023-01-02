import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SpotButton = () => {
  const navigate = useNavigate();
  const handlePost = () => navigate("/map/post");
  return <Button onClick={handlePost}>스팟 등록</Button>;
};

const Button = styled.div`
  color: #000;
  background-color: #00dc5f;
  font-size: 20px;
  font-weight: 700;
  width: 120px;
  text-align: center;
  padding: 10px;
  position: absolute;
  z-index: 10;
  margin: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px #fff;
  }
`;
