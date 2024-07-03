
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCS2orzFXLqt5uWueiuA0j5QCWowqUT8J8",
  authDomain: "insta-clone-myprojest.firebaseapp.com",
  projectId: "insta-clone-myprojest",
  storageBucket: "insta-clone-myprojest.appspot.com",
  messagingSenderId: "116729743293",
  appId: "1:116729743293:web:669fd6e1447de3c3bff4d4",
  measurementId: "G-TSZEG7W08W"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};
