import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCogPkEubDihKUF4VPkglUluM1g-KI9LK4",
    authDomain: "letslearn-492ad.firebaseapp.com",
    projectId: "letslearn-492ad",
     databaseURL:"https://letslearn-492ad-default-rtdb.firebaseio.com/",
    storageBucket: "letslearn-492ad.appspot.com",
    messagingSenderId: "902676893040",
    appId: "1:902676893040:web:aa26d6decf3ec78bc393b5",
    measurementId: "G-SX3L6SH29P"
  };
  
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);
