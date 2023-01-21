import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userData: null,
    didTryAutoLogin: false,
  },

  // this well update the intial state of the redux
  reducers: {
    authentication: (state, action) => {
      // payload holds the value of the value which will update the state

      const { payload } = action;
      //this assigns the new token value to the old one
      state.token = payload.token;
      state.userData = payload.userData;
      // console.log(state);
      // console.log("hi fhnfdg");
      state.didTryAutoLogin = true;
    },
    setDidTryAutoLogin: (state, action) => {
      state.didTryAutoLogin = true;
    },
    logout: (state, action) => {
      state.token = null;
      state.userData = null;
      state.didTryAutoLogin = false;
    },
  },
});

export const authenticate = authSlice.actions.authentication;
export const setDidTryAutoLogin = authSlice.actions.setDidTryAutoLogin;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;
