import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed";

// we need to somehow seed the database

const config = {
  apiKey: "AIzaSyDM-ya-Jc9A5DVfZ1jBVtnVvX1BqxHr2Jw",
  authDomain: "judahflix-78224.firebaseapp.com",
  projectId: "judahflix-78224",
  storageBucket: "judahflix-78224.appspot.com",
  messagingSenderId: "1093115991234",
  appId: "1:1093115991234:web:d5f8354121e4a7f27cd75b",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
