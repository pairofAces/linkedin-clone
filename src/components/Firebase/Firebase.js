const firebaseConfig = {
  apiKey: "AIzaSyDbDtxtz7W-iVkZN5Qq43xtxJbXZgOJQuA",
  authDomain: "linkedin-clone-ead71.firebaseapp.com",
  projectId: "linkedin-clone-ead71",
  storageBucket: "linkedin-clone-ead71.appspot.com",
  messagingSenderId: "657662109095",
  appId: "1:657662109095:web:d69cdfaea23afc4dcf0282"
};

//the following line of code sets the connection b/w the app and the database
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };