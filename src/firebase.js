import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAL8jQr01yzTsDZKJ1ymbouOOhCwoOIQA",
  authDomain: "netflix-clone-d187b.firebaseapp.com",
  projectId: "netflix-clone-d187b",
  storageBucket: "netflix-clone-d187b.appspot.com",
  messagingSenderId: "531894495249",
  appId: "1:531894495249:web:04bba34b2338d4c175e9b0",
  measurementId: "G-7CYWLNLRHP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
