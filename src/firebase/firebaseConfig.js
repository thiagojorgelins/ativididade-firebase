import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1-KFTk9TM1MR8h2h4U024YHOp9WudV-g",
    authDomain: "aula-firebase-6c9e5.firebaseapp.com",
    projectId: "aula-firebase-6c9e5",
    storageBucket: "aula-firebase-6c9e5.appspot.com",
    messagingSenderId: "715764728887",
    appId: "1:715764728887:web:b319c1c93fbd6f1604abb2",
    measurementId: "G-PWHR1KBC60"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)