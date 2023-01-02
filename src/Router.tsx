import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
};
