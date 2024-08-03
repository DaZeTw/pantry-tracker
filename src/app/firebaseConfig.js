// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxqLCaG4pK1WvbPqHZj04OgXiPqp0jze0",
  authDomain: "pantry-tracker-5bee1.firebaseapp.com",
  databaseURL: "https://pantry-tracker-5bee1-default-rtdb.firebaseio.com",
  projectId: "pantry-tracker-5bee1",
  storageBucket: "pantry-tracker-5bee1.appspot.com",
  messagingSenderId: "35948227754",
  appId: "1:35948227754:web:6e02fb859d678b3683b4d3",
  measurementId: "G-GBQN136GL4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
