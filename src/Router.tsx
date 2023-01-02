import { Route, Routes } from "react-router-dom";
import { CallbackGoogle } from "./components/Auth/CallbackGoogle";
import { Auth } from "./pages/Auth";
import { Google } from "./pages/Google";
import { Home } from "./pages/Home";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/auth/google/callback" element={<Google />} />
    </Routes>
  );
};
