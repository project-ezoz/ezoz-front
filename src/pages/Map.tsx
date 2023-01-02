import React from "react";
import { HeaderWrapper } from "../components/Header/HeaderWrapper";
import { MapPrint } from "../components/Map/MapPrint";
import { SearchInput } from "../components/Map/SearchInput";

export const Map = () => {
  return (
    <>
      <HeaderWrapper />
      <SearchInput />
      <MapPrint />
    </>
  );
};
