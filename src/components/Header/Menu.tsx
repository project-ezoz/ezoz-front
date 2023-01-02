import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { Nav } from "./Nav";
export const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleDraw = () => setOpen(!open);
  return (
    <MenuLayout>
      <MenuIcon fontSize="large" onClick={handleDraw} />
      {open && <Nav open={open} setOpen={setOpen} />}
    </MenuLayout>
  );
};

const MenuLayout = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
