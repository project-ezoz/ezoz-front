import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Nav } from "./Nav";
interface Props {
  color: string;
}
export const HeaderWrapper = ({ color }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleDraw = () => setOpen(!open);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/map");
  };
  return (
    <Wrapper color={color}>
      <Title onClick={handleHome} color={color}>
        EZOZ
      </Title>
      <MenuLayout>
        <MenuIcon
          fontSize="large"
          onClick={handleDraw}
          sx={{ color: color === "black" ? "white" : "black" }}
        />
        {open && <Nav open={open} setOpen={setOpen} />}
      </MenuLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${(props) => props.color};
`;
const Title = styled.p`
  color: ${(props) => (props.color === "black" ? "white" : "black")};
  margin: 0;
  font-size: 28px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
const MenuLayout = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
