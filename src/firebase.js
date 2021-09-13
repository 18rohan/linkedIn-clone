import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
// import * as firebase from 'firebase/app';
// import * as authenticator from 'firebase/auth';
// import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCDafx-8uDgJn-lE_Shj70lxXc866npBjY",
  authDomain: "linkedin-clone-0009.firebaseapp.com",
  projectId: "linkedin-clone-0009",
  storageBucket: "linkedin-clone-0009.appspot.com",
  messagingSenderId: "1021820213755",
  appId: "1:1021820213755:web:68a5a0c96b23d88205d35e"
};



const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

// const auth = authenticator.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export {provider, storage};
export default db; 

