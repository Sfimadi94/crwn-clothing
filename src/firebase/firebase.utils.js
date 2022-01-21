import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBSRIwuYHcWQJFmCUqC7l9_UZkWEqkc_wg",
  authDomain: "crwn-db-e6d68.firebaseapp.com",
  projectId: "crwn-db-e6d68",
  storageBucket: "crwn-db-e6d68.appspot.com",
  messagingSenderId: "166036127573",
  appId: "1:166036127573:web:4b6e2c5ec69ac2de2879dc",
  measurementId: "G-X53BH1228D",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
