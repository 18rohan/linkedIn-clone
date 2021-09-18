import { db, auth, storage, provider } from "../../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc,getDocs, addDoc, collection, Timestamp } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { SET_USER,SET_LOADING_STATE,GET_ARTICLES, LIKE_A_POST } from "./actionTypes";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) =>({
  type:SET_LOADING_STATE,
  loading:status,
});

export const getArticles = (payload) =>({
  type:GET_ARTICLES,
  payload:payload
});

export const likePost = (payload) =>({
  type:LIKE_A_POST,
  payload:payload
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

export const getArticlesAPI = (payload) =>{
  return async (dispatch) =>{

    const querySnapshot = await getDocs(collection(db, "articles"));
    let docs = [];
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docs.push(doc.data());

  });
  dispatch(getArticles(docs));
  console.log("ARTICLES ACTION : ",docs);
  }
}


export const postArticleAPI = (payload) => {
  // Create a root reference
  const storage = getStorage();
  console.log("IMAGE:", payload);
  // Create a reference to 'mountains.jpg'
  const storageRef = ref(storage, `images/${payload.image.name}`);
  // const uploadTask = uploadBytesResumable(storageRef, file);
  return async (dispatch) => {
    const uploadTask = uploadBytesResumable(storageRef, payload.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("FILE AVAILABLE AT: ", downloadURL);
        await addDoc(collection(db, "articles"), {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          video: payload.video,
          sharedImg: downloadURL,
          comments: 0,
          description: payload.description,
        });
        dispatch(setLoading(false));
      }
    );
  };
};
