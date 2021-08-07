import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6PTA0jcx1Eb-VrCbzGD0O9JUcWVdNQpg",
    authDomain: "fir-34a4c.firebaseapp.com",
    databaseURL:
        "https://fir-34a4c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-34a4c",
    storageBucket: "fir-34a4c.appspot.com",
    messagingSenderId: "639307115705",
    appId: "1:639307115705:web:8cb32eff46f0e705bb7f68",
    measurementId: "G-52R0M0MGZB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };
