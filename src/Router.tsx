import { Route, Routes } from "react-router-dom";
import { CallbackGoogle } from "./components/Auth/CallbackGoogle";
import { Auth } from "./pages/Auth";
import { Google } from "./pages/Google";
import { Map } from "./pages/Map";
import { MapPost } from "./pages/MapPost";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/auth/google/callback" element={<Google />} />
      <Route path="/map" element={<Map />} />
      <Route path="/map/post" element={<MapPost />} />
    </Routes>
  );
};
