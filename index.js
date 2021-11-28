import db from "./utils/firebase.js";
import { collection, doc, setDoc } from "firebase/firestore";
import fs from "fs";

function readData(filePath, cb) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return
        }
        var splitData = data.replace(/(\r\n|\n|\r)/gm, "").split(/Title: /);
        
        var characterList = [];
        splitData.forEach(c => {
            var characterInfo = c.split(/Name: |Description: /);
            characterList.push({
                name: characterInfo[1],
                title: characterInfo[0],
                description: characterInfo[2]
            });
        }); 
        cb(characterList);
    });
}

readData('./data.txt', (data) => {
    data.forEach(async (characterInfo) => {
        const charactersRef = doc(collection(db, "characters"));

        await setDoc(charactersRef, {
            id: charactersRef.id,
            name: String(characterInfo["name"]),
            title: String(characterInfo["title"]),
            description: String(characterInfo["description"])
        }).catch(err => {
            console.log(err);
        }).then(() => {
            console.log(characterInfo);
            console.log("Document written with ID: ", charactersRef.id);
        });        
    });    

});