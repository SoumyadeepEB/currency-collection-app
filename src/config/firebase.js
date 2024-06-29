import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA41dgs8dM9qJOoeuffUxV70dFXaT2DxDw",
  authDomain: "db-sg-currency-collection.firebaseapp.com",
  databaseURL: "https://db-sg-currency-collection-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "db-sg-currency-collection",
  storageBucket: "db-sg-currency-collection.appspot.com",
  messagingSenderId: "723881074497",
  appId: "1:723881074497:web:2e7b3f7deb23d197978bc0",
  measurementId: "G-PQ44EKFM2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;