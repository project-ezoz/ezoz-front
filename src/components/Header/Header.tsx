import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/map");
  };
  return <Title onClick={handleHome}>EZOZ</Title>;
};

const Title = styled.p`
  color: black;
  margin: 0;
  font-size: 28px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
