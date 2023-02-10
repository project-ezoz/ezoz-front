import React from "react";
import styled from "styled-components";

interface IMarker {
  id: number;
  lat: number;
  lng: number;
  target: boolean;
}

export const BlackMarker = ({ id, lat, lng, target }: IMarker) => {
  return <Marker src="/images/blackmarker.png" />;
};

const Marker = styled.img`
  transform: translate(-50%, -100%);

  &:active {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
