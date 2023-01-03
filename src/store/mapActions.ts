import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  DELETE_MARKER,
  GET_MARKER_LIST,
  POST_MARKER,
  PUT_MARKER,
} from "../api";

export const postMarker = createAsyncThunk("marker/post", async () => {
  const response = await axios.get(POST_MARKER());
  return response.data;
});

export const deleteMarker = createAsyncThunk(
  "marker/delete",
  async (id: number) => {
    const response = await axios.delete(DELETE_MARKER(id));
    return response.data;
  }
);

export const putMarker = createAsyncThunk("marker/put", async (id: number) => {
  const response = await axios.put(PUT_MARKER(id));
  return response.data;
});

export const getMarkerList = createAsyncThunk("marker/get", async () => {
  const response = await axios.get(GET_MARKER_LIST());
  return response.data;
});
