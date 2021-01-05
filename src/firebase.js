import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkBNWL48vY6duuUBxNgU8-lHvr4F0BxRo",
  authDomain: "fir-54ec9.firebaseapp.com",
  projectId: "fir-54ec9",
  storageBucket: "fir-54ec9.appspot.com",
  messagingSenderId: "41258660667",
  appId: "1:41258660667:web:6cedf9f5c22b5d58df3d1e",
  measurementId: "G-H0VBV3GW0Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
