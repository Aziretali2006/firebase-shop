
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { iFireConfig } from "../types/types";

const firebaseConfig: iFireConfig = {
  apiKey: "AIzaSyAkHu24XthxqEJYCMTuuuZC6KEnNmrd2nU",
  authDomain: "fire-shop-9e533.firebaseapp.com",
  projectId: "fire-shop-9e533",
  storageBucket: "fire-shop-9e533.appspot.com",
  messagingSenderId: "804267711564",
  appId: "1:804267711564:web:2d833ebad5d419729fa8e9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const joinWithGoogle = new GoogleAuthProvider();

export {
  auth, 
  joinWithGoogle
}