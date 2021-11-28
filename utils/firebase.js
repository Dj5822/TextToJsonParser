import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZGkekAEFSNa94hplF894PBkmniWleamA",
    authDomain: "arthea-project.firebaseapp.com",
    projectId: "arthea-project",
    storageBucket: "arthea-project.appspot.com",
    messagingSenderId: "740204909742",
    appId: "1:740204909742:web:cd333209932f80403a893f",
    measurementId: "G-RR86553QEQ"
};
  
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;