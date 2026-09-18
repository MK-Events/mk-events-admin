import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const AUTH_SESSION_KEY = "mk-events-admin-authenticated";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: sessionStorage.getItem(AUTH_SESSION_KEY) === "true",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
      if (action.payload) {
        sessionStorage.setItem(AUTH_SESSION_KEY, "true");
      } else {
        sessionStorage.removeItem(AUTH_SESSION_KEY);
      }
    },
  },
});

export const { setAuthenticated } = authSlice.actions;
