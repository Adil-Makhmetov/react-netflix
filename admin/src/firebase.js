import firebase from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDxbARzsVhQT_nqJ-vSIwZG2TmrgCP0LFc",
  authDomain: "netflix-bec04.firebaseapp.com",
  projectId: "netflix-bec04",
  storageBucket: "netflix-bec04.appspot.com",
  messagingSenderId: "321371589677",
  appId: "1:321371589677:web:cb4b5667db624817f7bca4",
  measurementId: "G-EVPKS651B2"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;