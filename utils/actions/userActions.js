import { child, get, getDatabase, ref } from "firebase/database";
import React from "react";
import { app } from "../../Auth/firebase/firebaseConfig";

export const getUserData = async (userId) => {
  try {
    const dbRef = ref(getDatabase(app));
    const userRef = child(dbRef, `users/${userId}`);
    const snapshot = await get(userRef);
    return snapshot.val();
  } catch (error) {}
};
