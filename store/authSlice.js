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

      console.log(payload);

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
      console.log("log");
    },

    updateLoggedInUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload.newData };
    },
  },
});

export const authenticate = authSlice.actions.authentication;
export const setDidTryAutoLogin = authSlice.actions.setDidTryAutoLogin;
export const logout = authSlice.actions.logout;
export const updateLoggedInUserData = authSlice.actions.updateLoggedInUserData;
export default authSlice.reducer;
