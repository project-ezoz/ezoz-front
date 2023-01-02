import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const HeaderWrapper = () => {
  return (
    <Wrapper>
      <Header />
      <Menu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`;
