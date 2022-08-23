import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const LoginSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginHandle: (state, action) => {
      console.log(action);
      localStorage.setItem("user", action.payload.values.email);
      state.user = action.payload.user;
    },
  
    logoutHandle: (state, action) => {
      localStorage.removeItem("user");
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginHandle, logoutHandle } = LoginSlices.actions;

export default LoginSlices.reducer;
