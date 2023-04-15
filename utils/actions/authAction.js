import { app } from "../../Auth/firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { child, getDatabase, ref, set } from "firebase/database";
import { useEffect } from "react";
import { authenticate } from "../../store/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { async } from "validate.js";
import { getUserData } from "./userActions";
import { logout } from "../../store/authSlice";

let timer;

//this is the sign up screen
export const signUp = (firstName, lastName, email, password) => {
  return async (dispatch) => {
    //this initailize the app
    const auth = getAuth(app);

    //this is a firebase function that creates a user with email and password
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { uid, stsTokenManager } = result.user;
      const { accessToken, expirationTime } = stsTokenManager;

      const expiryDate = new Date(expirationTime);
      const timeNow = new Date();
      const millisecondsUntilExpiry = expiryDate - timeNow;
      console.log(millisecondsUntilExpiry);
      const userData = await createUser(firstName, lastName, email, uid);

      dispatch(authenticate({ token: accessToken, userData }));
      timer = setTimeout(() => {
        dispatch(userLogout());
      }, millisecondsUntilExpiry);

      saveDataToStorage(accessToken, uid, expiryDate);
    } catch (error) {
      const errorMessage = error.code;

      console.log(errorMessage + "we are the one logging this error ");
      throw new Error(errorMessage);
    }
  };
};

// this is the sign in screen so next time don't use it as sign uo screen
export const signIn = (email, password) => {
  return async (dispatch) => {
    const auth = getAuth(app);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      const { uid, stsTokenManager } = result.user;
      const { accessToken, expirationTime } = stsTokenManager;

      const expiryDate = new Date(expirationTime);
      const timeNow = new Date();
      const millisecondsUntilExpiry = expiryDate - timeNow;

      const userData = await getUserData(uid);
      console.log(userData);

      dispatch(authenticate({ token: accessToken, userData }));
      console.log(userData, "from somewhere we dont know");
      saveDataToStorage(accessToken, uid, expiryDate);

      timer = setTimeout(() => {
        dispatch(userLogout());
      }, millisecondsUntilExpiry);
    } catch (error) {
      const errorMessage = error.code;
      throw new Error(errorMessage);
    }
  };
};

//Creating a new user
const createUser = async (firstName, lastName, email, userId) => {
  const userName = `${firstName} ${lastName}`.toLowerCase();

  const userData = {
    firstName,
    lastName,
    userName,
    email,
    userId,
    signUpDate: new Date().toISOString(),
  };

  const db = getDatabase();
  const dbRef = ref(db);
  const childRef = child(dbRef, `users/${userId}`);
  try {
    await set(childRef, userData);
  } catch (error) {
    console.log(error.code);
  }
  return userData;
};

const saveDataToStorage = (token, userId, expiryDate) => {
  const savedData = {
    token,
    userId,
    expiryDate: expiryDate.toISOString(),
  };

  AsyncStorage.setItem("userData", JSON.stringify(savedData));
};

export const userLogout = () => {
  return async (dispatch) => {
    AsyncStorage.clear();
    clearTimeout(timer);
    dispatch(logout());
  };
};

// export const signIn = async (em ail, password) => {
//   const auth = getAuth(app);

//   try {
//     const result = await signInWithEmailAndPassword(auth, email, password);
//     console.log(result);
//   } catch (error) {
//     const errorMessage = error.code;

//     throw new Error(errorMessage);
//   }
// };
