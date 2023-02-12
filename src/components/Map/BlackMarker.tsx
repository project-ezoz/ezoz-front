import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useToken } from "../../hooks/useToken";
interface IMarker {
  id: number;
  lat: number;
  lng: number;
  target: boolean;
}

export const BlackMarker = ({ id, lat, lng, target }: IMarker) => {
  // TODO : 마커 개개인 조회 안됨
  const token = useToken();
  const handleBlackClick = () => {
    axios
      .get(`https://ezoz-trip.com/marker/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res));
  };
  return <Marker src="/images/blackmarker.png" onClick={handleBlackClick} />;
};

const Marker = styled.img`
  transform: translate(-50%, -100%);
  &:hover {
    cursor: pointer;
  }
`;
