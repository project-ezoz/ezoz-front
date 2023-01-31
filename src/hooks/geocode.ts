import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(import.meta.env.VITE_APP_MAP_KEY);
Geocode.setLanguage("ko");
Geocode.setRegion("ko");
Geocode.enableDebug();

export const getAddressFromLatLng = async (lat: number, lng: number) => {
  const formattedAddress = await Geocode.fromLatLng(lat, lng).then(
    (response: { results: { formatted_address: any }[] }) => {
      const address = response.results[0].formatted_address;

      return address;
    },
    (error: any) => {
      console.log(error);
    }
  );
  return formattedAddress;
};
