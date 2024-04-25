// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3FdGIa43ct196O0GetzyLhhNt-mB2KGY",
  authDomain: "quiz02-96508.firebaseapp.com",
  projectId: "quiz02-96508",
  storageBucket: "quiz02-96508.appspot.com",
  messagingSenderId: "32597424692",
  appId: "1:32597424692:web:87830b45a9d8a3dea86861",
  measurementId: "G-603LCEQ73X",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }

export const storage = getStorage(firebaseApp);
