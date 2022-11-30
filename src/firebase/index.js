// Import the functions you need from the SDKs you need
import "firebase/compat/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVuyirisronxH_6Ll9ynwglXDytzrKnHU",
    authDomain: "todo-5b6c3.firebaseapp.com",
    projectId: "todo-5b6c3",
    storageBucket: "todo-5b6c3.appspot.com",
    messagingSenderId: "982395635948",
    appId: "1:982395635948:web:f094141502ccb53ec77dc9",
    measurementId: "G-03W0ZXZ32E"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage()

export {db,storage}