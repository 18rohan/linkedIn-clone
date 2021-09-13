import { auth, provider } from "../../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {db, auth, storage} from '../../firebase/firebase';

import { SET_USER } from "./actionTypes";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(payload);
        const token = credential.accessToken;
        console.log("Token: ", token);
        // The signed-in user info.
        const user = payload.user;
        console.log("User: ", user);
        dispatch(setUser(payload.user));
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log("Error Code: ", errorCode);
        const errorMessage = error.message;
        console.log("Error Message: ", errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log("Error Email: ", email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Credentials: ", credential);
        // ...
      });
  };
}

export const getUserAuth = (payload) => {
  const auth = getAuth();
  return (dispatch) => {
    auth.OnAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};

export const signoutAPI = (payload) => {
  const auth = getAuth();
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const postArticleAPI = (payload) => {
  // Create a root reference
  const storage = getStorage();
  // Create a reference to 'mountains.jpg'
  const storageRef = ref(storage, `images/${payload.image}`);
  // const uploadTask = uploadBytesResumable(storageRef, file);
  return (dispatch) => {
    const upload = storage.ref(`images/${payload.image}`).put(payload.image);
    upload.on(
      "state-changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTrasnferred / snapshot.totalBytes) * 100;
        console.log("Progress: ", progress);
        if (snapshot.state === "RUNNING") {
          console.log("PROGRESS: ", progress);
        }
      },
      (error) => console.log(error.code),
      async () => {
        const downloadURL = await upload.snapshot.ref.getDownloadURL;
      }
    );
  };
};
