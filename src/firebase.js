// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAObSqn753YUxI9PxCN-sfSQN_LJ0Z03lM",
  authDomain: "ig-reels-549f7.firebaseapp.com",
  projectId: "ig-reels-549f7",
  storageBucket: "ig-reels-549f7.appspot.com",
  messagingSenderId: "632058661921",
  appId: "1:632058661921:web:8459a776b7fc92fb396760",
  measurementId: "G-SQTJ345P4Y"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export default db;
