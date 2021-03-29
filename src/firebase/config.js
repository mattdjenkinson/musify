import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmxHgXRa4wbLuvrRKYG9od3XKLufOmtnM",
  authDomain: "musify-47895.firebaseapp.com",
  projectId: "musify-47895",
  storageBucket: "musify-47895.appspot.com",
  messagingSenderId: "528483970382",
  appId: "1:528483970382:web:5eda6420ee68c212a7c21f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectStorage = firebase.storage();

export { projectFirestore, projectAuth, timestamp, projectStorage };
