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
  border-radius: 5%;
  &:hover {
    cursor: pointer;
    text-shadow: 2px 2px 2px gray;
  }
`;
