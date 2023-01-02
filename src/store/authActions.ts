import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_GOOGLE_TOKEN } from "../api";

export const userLogin = createAsyncThunk(
  "user/login",
  async (code: string) => {
    if (code) {
      const response = await axios.get(GET_GOOGLE_TOKEN(code));
      return response.data;
    }
  }
);
