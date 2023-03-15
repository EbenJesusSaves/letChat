import { child, get, getDatabase, ref } from "firebase/database";
import React from "react";
import { app } from "../../Auth/firebase/firebaseConfig";

// export const getUserData = async (userId) => {
//   try {
//     const dbRef = ref(getDatabase(app));
//     const userRef = child(dbRef, `users/${userId}`);

//     const snapshot = await get(userRef);
//     console.log(snapshot.val() + "hi");
//     return snapshot.val();
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getUserData = async (userId) => {
  try {
    // const app = getFirebaseApp();
    console.log(userId);
    const dbRef = ref(getDatabase(app));
    const userRef = child(dbRef, `users/${userId}`);

    const snapshot = await get(userRef);
    console.log(snapshot.val() + "hi");
    return snapshot.val();
  } catch (error) {
    console.log(error);
  }
};
