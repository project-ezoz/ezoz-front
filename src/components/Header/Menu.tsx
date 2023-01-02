import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
export const Menu = () => {
  return (
    <MenuLayout>
      <MenuIcon sx={{}} fontSize="large" />
    </MenuLayout>
  );
};

const MenuLayout = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
