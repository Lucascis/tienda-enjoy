import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-project-98171.firebaseapp.com",
    projectId: "react-project-98171",
    storageBucket: "react-project-98171.appspot.com",
    messagingSenderId: "400576887874",
    appId: "1:400576887874:web:daeb1007bd1380cb3ac1db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;