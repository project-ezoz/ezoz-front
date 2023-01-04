import React, { useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { SpotButton } from "./SpotButton";
import { Marker } from "./Marker";
export const MapPrint = () => {
  const [api, setApi] = useState<boolean>(false);
  const [map, setMap] = useState();
  const [googlemaps, setGooglemaps] = useState();
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const handleApiLoaded = (map: any, maps: any) => {
    if (map && maps) {
      setApi(true);
      setMap(map);
      setGooglemaps(maps);
    }
  };
  const defaultProps = {
    center: {
      lat: 37.49451137331156,
      lng: 126.94584585059987,
    },
    zoom: 11,
  };

  const handleClick = (e: GoogleMapReact.ClickEventValue) => {
    console.log(e.lat, e.lng);
    setLat(e.lat);
    setLng(e.lng);
  };
  return (
    <MapLayout>
      <SpotButton />
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_APP_MAP_KEY,
          region: "kr",
          libraries: ["geometry"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={handleClick}
        onChange={(e) => console.log(e)}
      >
        <Marker lat={lat} lng={lng} text="Marker" />
      </GoogleMapReact>
    </MapLayout>
  );
};

const MapLayout = styled.div`
  width: 100%;
  height: 700px;
`;
