import { child, get, getDatabase, ref } from "firebase/database";

import { app } from "../../Auth/firebase/firebaseConfig";

export const getUserData = async (userId) => {
  try {
    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, `users/${userId}`);

    const snapshot = await get(userRef);
    console.log(snapshot.val() + "hi");
    return snapshot.val();
  } catch (error) {
    console.log(error);
  }
};

//so this function don't even run
// export const getUserData = async (userId) => {
//   // try {
//   //   // console.log(" I dont run");
//   //   // // const app = getFirebaseApp();
//   //   // console.log(userId);
//   //   // const dbRef = ref(getDatabase());
//   //   // const userRef = get(child(dbRef, `users/${userId}`));
//   //   // console.log(userRef);
//   //   // const snapshot = await userRef;
//   //   // console.log(snapshot.val() + "hi😂😂");
//   //   // return snapshot.val();

//   //   const dbRef = ref(getDatabase());
//   //   get(child(dbRef, `users/${userId}`))
//   //     .then((snapshot) => {
//   //       if (snapshot.exists()) {
//   //         console.log(snapshot.val());
//   //         return snapshot.val();
//   //       } else {
//   //         console.log("No data available");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // } catch (error) {
//   //   console.log(error);
//   // }

//   console.log(userId, "just checking how this works ");

//   const dbRef = ref(getDatabase());
//   get(child(dbRef, `users/${userId}`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val() && snapshot.val());
//         return snapshot.val() && snapshot.val();
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

console.log(getUserData());
