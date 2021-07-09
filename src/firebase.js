import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCC8bsniSKxVfTD_DjwMfeAx7Bik5o-9i0",
  authDomain: "alternativeto-clone01.firebaseapp.com",
  projectId: "alternativeto-clone01",
  storageBucket: "alternativeto-clone01.appspot.com",
  messagingSenderId: "1087124467896",
  appId: "1:1087124467896:web:97745616e18c5c9652c44d",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const storage = app.storage();

export { auth, storage };
export default db;
