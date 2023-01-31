import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { SpotButton } from "./SpotButton";
import { Marker } from "./Marker";
import { useAppDispatch } from "../../store/store";
import { setcenter } from "../../store/mapSlice";
import axios from "axios";
import { PlaceType } from "../../types";
import { BlackMarker } from "./BlackMarker";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

export const MapPrint = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 37.49451137331156,
    lng: 126.94584585059987,
  });
  const [api, setApi] = useState<boolean>(false);
  const [map, setMap] = useState();
  const [googlemaps, setGooglemaps] = useState();
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [place, setPlace] = useState<PlaceType[]>([]);
  const [target, setTarget] = useState<number>(0);
  const dispatch = useAppDispatch();
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
    zoom: 15,
  };

  const handleClick = (e: GoogleMapReact.ClickEventValue) => {
    setLat(e.lat);
    setLng(e.lng);
    dispatch(setcenter({ lat: e.lat, lng: e.lng }));
  };

  const markerClick = (e: any) => {
    console.log(e);
    setTarget(e);
  };

  const handleCurrentPlace = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        setLat(latitude);
        setLng(longitude);
      }
    );
  };

  const handleChangeCenter = (event: GoogleMapReact.ChangeEventValue) => {
    setCoordinates({ lat: event.center.lat, lng: event.center.lng });
  };

  useEffect(() => {
    axios.get("/src/test.json").then((res) => {
      console.log(res.data);
      res.data.data.map((item: any) => setPlace((prev) => [...prev, item]));
    });
  }, []);

  return (
    <MapLayout>
      <SpotButton />
      <GpsFixedIcon
        sx={{
          position: "absolute",
          zIndex: "10",
          top: "750px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        fontSize="large"
        onClick={handleCurrentPlace}
      />
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_APP_MAP_KEY,
          region: "kr",
          libraries: ["geometry"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={handleClick}
        onChildClick={markerClick}
        onChange={handleChangeCenter}
      >
        <Marker lat={lat} lng={lng} text="Marker" />
        {place.map((marker, idx) => (
          <BlackMarker
            key={marker.id}
            id={marker.id}
            lat={parseFloat(marker.lat)}
            lng={parseFloat(marker.lng)}
            text={marker.content}
            target={marker.id === target}
          />
        ))}
      </GoogleMapReact>
    </MapLayout>
  );
};

const MapLayout = styled.div`
  width: 100%;
  height: 700px;
`;
