import {
  child,
  endAt,
  get,
  getDatabase,
  orderByChild,
  query,
  ref,
  startAt,
} from "firebase/database";

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

export const searchUser = async (queryText) => {
  const searchTerm = queryText.toLowerCase();

  try {
    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, `users`);

    const queryRef = query(
      userRef,
      orderByChild("userName"),
      startAt(searchTerm),
      endAt(searchTerm + "\uf8ff")
    );
    const snapshot = await get(queryRef);

    if (snapshot.exists) {
      return snapshot.val();
    }
    return {};
  } catch (error) {}
};
