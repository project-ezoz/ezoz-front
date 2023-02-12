import React, { useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { SpotButton } from "./SpotButton";
import { Marker } from "./Marker";
import { useAppDispatch } from "../../store/store";
import { setcenter } from "../../store/mapSlice";
import axios from "axios";
import { BoundsType, PlaceType } from "../../types";
import { BlackMarker } from "./BlackMarker";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { GET_MARKERS } from "../../api";

export const MapPrint = () => {
  // TODO : 중복되는 위경도 통일하기
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
  const [zoom, setZoom] = useState<number>(15);
  const [bounds, setBounds] = useState<BoundsType>({
    ne: { lat: 0, lng: 0 },
    nw: { lat: 0, lng: 0 },
    se: { lat: 0, lng: 0 },
    sw: { lat: 0, lng: 0 },
  });
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
    zoom: zoom,
  };

  const handleClick = (e: GoogleMapReact.ClickEventValue) => {
    setLat(e.lat);
    setLng(e.lng);
    dispatch(setcenter({ lat: e.lat, lng: e.lng }));
  };

  const markerClick = (e: any) => {
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
    console.log(event);
    setZoom(event.zoom);
    setBounds({
      ne: event.bounds.ne,
      nw: event.bounds.nw,
      se: event.bounds.se,
      sw: event.bounds.sw,
    });
    setCoordinates({ lat: event.center.lat, lng: event.center.lng });
  };

  const handleSearchPlace = async () => {
    if (zoom < 15) {
      alert("지도가 너무 넓어요");
    } else {
      const res = await axios.post(GET_MARKERS, {
        ne: bounds.ne,
        nw: bounds.nw,
        se: bounds.se,
        sw: bounds.sw,
      });
      console.log(res.data);
      if (res.data.length === 0) alert("검색 결과가 없습니다.");
      else
        res.data.map((value: PlaceType) =>
          setPlace((prev) => [...prev, value])
        );
    }
  };

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
      <SearchButton onClick={handleSearchPlace}>현 지도에서 검색</SearchButton>
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
            key={marker.markerId}
            id={marker.markerId}
            lat={marker.latitude}
            lng={marker.longitude}
            target={marker.markerId === target}
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

const SearchButton = styled.div`
  color: #000;
  background-color: #00dc5f;
  font-size: 15px;
  font-weight: 800;
  width: 150px;
  text-align: center;
  padding: 10px;
  position: absolute;
  z-index: 10;
  margin: 10px;
  top: 750px;
  left: 450px;
  border-radius: 5%;
  &:hover {
    cursor: pointer;
    text-shadow: 2px 2px 2px gray;
  }
`;
