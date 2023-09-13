import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAgI-_2Af8RbZFqjQukAsXRcfX37OHxG4k",
    authDomain: "chat-app-vtwo-6c99d.firebaseapp.com",
    projectId: "chat-app-vtwo-6c99d",
    storageBucket: "chat-app-vtwo-6c99d.appspot.com",
    messagingSenderId: "631326266587",
    appId: "1:631326266587:web:4fe8c03416f0e1079928fe"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()