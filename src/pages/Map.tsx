import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { HeaderWrapper } from "../components/Header/HeaderWrapper";
import { MapPrint } from "../components/Map/MapPrint";
import { SearchInput } from "../components/Map/SearchInput";
import { useAuthentication } from "../hooks/useAuthentication";

export const Map = () => {
  const isLoggedIn = useAuthentication();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn]);
  return (
    <>
      <Helmet>
        <title>EZOZ | Map</title>
      </Helmet>
      <HeaderWrapper color="black" />
      <SearchInput />
      <MapPrint />
    </>
  );
};
