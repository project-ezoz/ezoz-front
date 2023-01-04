import { createSlice } from "@reduxjs/toolkit";
import { CenterMarkerType } from "../types";

const initialState: CenterMarkerType = {
  lat: 0,
  lng: 0,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setcenter: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { setcenter } = mapSlice.actions;
