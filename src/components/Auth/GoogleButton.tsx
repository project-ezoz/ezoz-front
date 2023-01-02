import React from "react";
import styled from "styled-components";

export const GoogleButton = () => {
  return (
    <GoogleLayout>
      <GoogleIcon src="/public/images/g-logo.png" />
      구글로 3초만에 로그인하기
    </GoogleLayout>
  );
};

const GoogleLayout = styled.div`
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-sizing: border-box;
  background-color: #fff;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px #212529;
  }
  margin: 50px 0;
`;
const GoogleIcon = styled.img`
  width: 40px;
  height: 40px;
  padding-right: 20px;
`;
