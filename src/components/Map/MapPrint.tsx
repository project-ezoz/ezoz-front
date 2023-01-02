import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
export const MapPrint = () => {
  const defaultProps = {
    center: {
      lat: 37.49451137331156,
      lng: 126.94584585059987,
    },
    zoom: 11,
  };
  const handleClick = (e: any) => {
    console.log(e.lat, e.lng);
  };
  return (
    <MapLayout>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_APP_MAP_KEY,
          region: "kr",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={handleClick}
        options={{
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [
                {
                  saturation: 36,
                },
                {
                  color: "#f1f3f5",
                },
                {
                  lightness: 70,
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#000000",
                },
                {
                  lightness: 30,
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 70,
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 17,
                },
                {
                  weight: 1.2,
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 30,
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 30,
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 30,
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 29,
                },
                {
                  weight: 0.2,
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 38,
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [
                {
                  color: "#9e9d9d",
                },
                {
                  lightness: 10,
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 50,
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#343a40",
                },
                {
                  lightness: 17,
                },
              ],
            },
          ],
        }}
      ></GoogleMapReact>
    </MapLayout>
  );
};

const MapLayout = styled.div`
  width: 100%;
  height: 700px;
`;
