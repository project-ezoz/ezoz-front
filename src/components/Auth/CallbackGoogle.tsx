import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GET_GOOGLE_TOKEN } from "../../api";

interface LoginFormProps {
  login: (code: string) => void;
}

export const CallbackGoogle = ({ login }: LoginFormProps) => {
  const code: string | null = new URL(window.location.href).searchParams.get(
    "code"
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (code) {
      login(code);
      navigate("/map");
    }
  }, []);
  return <div>CallbackGoogle</div>;
};
