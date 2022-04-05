import * as fb from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const fbConfig = {
    apiKey: "AIzaSyASUenpQXmy8g385ydqbhTOOQXq1tzB0zg",
    authDomain: "chatty-app-taller.firebaseapp.com",
    projectId: "chatty-app-taller",
    storageBucket: "chatty-app-taller.appspot.com",
    messagingSenderId: "365785135524",
    appId: "1:365785135524:web:bce763cb9e9451ce7d6931",
    databaseURL: "https://chatty-app-taller-default-rtdb.firebaseio.com/"

};

fb.initializeApp(fbConfig);
export const auth = getAuth();
export const db = getDatabase();
