import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAXaqvFgJGt_AL7ZeEVcQ-HI6rTdRl_efM",
    authDomain: "project-alternativeto-clone.firebaseapp.com",
    projectId: "project-alternativeto-clone",
    storageBucket: "project-alternativeto-clone.appspot.com",
    messagingSenderId: "63519273108",
    appId: "1:63519273108:web:d7e37882fd7b72adb20481" }

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const storage = app.storage();

export { auth, storage };
export default db;