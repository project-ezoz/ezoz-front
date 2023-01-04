import React from "react";

interface IMarker {
  lat: number;
  lng: number;
  text: string;
}
export const Marker = ({ lat, lng, text }: IMarker) => {
  return (
    <img
      src="/public/images/marker.png"
      style={{ transform: "translate(-50%, -100%)" }}
    />
  );
};
