import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDafx-8uDgJn-lE_Shj70lxXc866npBjY",
  authDomain: "linkedin-clone-0009.firebaseapp.com",
  projectId: "linkedin-clone-0009",
  storageBucket: "linkedin-clone-0009.appspot.com",
  messagingSenderId: "1021820213755",
  appId: "1:1021820213755:web:68a5a0c96b23d88205d35e",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export { auth, db, provider, storage };
