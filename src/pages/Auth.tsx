import React, { useEffect } from "react";
import { GoogleButton } from "../components/Auth/GoogleButton";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { LoginContainer } from "../containers/LoginContainer";
import { useAuthentication } from "../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
export const Auth = () => {
  const isLoggedIn = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/map");
    }
  }, [isLoggedIn]);
  return (
    <>
      <Helmet>
        <title>EZOZ | Login</title>
      </Helmet>
      <BackgroundImg>
        <TitleText>일상과 다른 새로운 경험을 찾는</TitleText>
        <TitleText>사람들을 위한 오지 컨텐츠 서비스</TitleText>
        <GoogleButton />
        <LawText>
          로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
        </LawText>
        <LawText>
          서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
        </LawText>
      </BackgroundImg>
    </>
  );
};

const BackgroundImg = styled.div`
  background-image: url("/public/images/auth.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  color: #fff;
  font-size: 30px;
  font-weight: 550;
  margin: 15px;
`;

const LawText = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin: 15px;
`;
