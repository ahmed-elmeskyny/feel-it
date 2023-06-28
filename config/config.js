import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-UFZdTo3woXqhyFYepDwfJ0kkouG0nP0",
  authDomain: "feel-it-9e851.firebaseapp.com",
  projectId: "feel-it-9e851",
  storageBucket: "feel-it-9e851.appspot.com",
  messagingSenderId: "660822796377",
  appId: "1:660822796377:web:6a0c8c513cd9358e5c2948",
};

const app = initializeApp(firebaseConfig);
export const fire = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
