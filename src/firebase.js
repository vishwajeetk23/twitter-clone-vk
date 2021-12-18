import { initializeApp } from 'firebase/app';
import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfzYCYRh03Lti2rJUbM2AIh49LU95AorQ",
    authDomain: "chatterbox-60830.firebaseapp.com",
    projectId: "chatterbox-60830",
    storageBucket: "chatterbox-60830.appspot.com",
    messagingSenderId: "729475851862",
    appId: "1:729475851862:web:158abbfc2442920d937df7",
    measurementId: "${config.measurementId}"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;