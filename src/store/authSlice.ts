import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";

interface LoggedInState {
  userToken: string | null;
  isLoggedIn: boolean;
  error?: string;
}

const initialState: LoggedInState = {
  userToken: null,
  isLoggedIn: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.userToken = null;
      state.isLoggedIn = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.userToken = action.payload.accessToken;
      state.isLoggedIn = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
