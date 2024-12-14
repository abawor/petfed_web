import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBZGCXsDwnUwmpdoRVWaacP2rELXY3RBVw",
    authDomain: "petfed-web.firebaseapp.com",
    projectId: "petfed-web",
    storageBucket: "petfed-web.firebasestorage.app",
    messagingSenderId: "87824849002",
    appId: "1:87824849002:web:4f1075efb3809c8a2b5213",
    measurementId: "G-ZMDV827F4Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
