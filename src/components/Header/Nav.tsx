import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Nav = ({ open, setOpen }: Props) => {
  return (
    <NavWrapper>
      <Close>
        <CloseIcon onClick={() => setOpen(!open)} fontSize="large" />
      </Close>
      <LinkWrapper>
        <Link to="/map">MAP</Link>
        <Link to="/posts">POSTS</Link>
      </LinkWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;
  right: -1px;
  top: 0;
  z-index: 11;
  background-color: #fff;
`;
const Close = styled.div`
  display: flex;
  justify-content: end;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Link = styled(NavLink)`
  font-size: 30px;
  color: #212529;
  text-decoration: none;
`;
