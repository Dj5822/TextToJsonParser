import db from "./utils/firebase.js";
import { collection, doc, setDoc } from "firebase/firestore";

const charactersRef = doc(collection(db, "characters"));

await setDoc(charactersRef, {
    id: charactersRef.id,
    name: "Fenrir",
    title: "",
    description: ""
});

console.log("Document written with ID: ", charactersRef.id);