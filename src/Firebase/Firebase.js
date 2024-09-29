import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAGEsh47wSLV4noXnNWNJG1r8F8iIYtXnU",
  authDomain: "chatify-jdtheefirst.firebaseapp.com",
  projectId: "chatify-jdtheefirst",
  storageBucket: "chatify-jdtheefirst.appspot.com",
  messagingSenderId: "591196832061",
  appId: "1:591196832061:web:50c18cd5187ca98fb38554",
  measurementId: "G-WB8FVR6S1R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
