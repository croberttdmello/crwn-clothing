import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBlTBBx_td8hGsRr9jjtErI8SZW3jWDLP0",
  authDomain: "crwn-clothing-db-85e1a.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-85e1a.firebaseio.com",
  projectId: "crwn-clothing-db-85e1a",
  storageBucket: "crwn-clothing-db-85e1a.appspot.com",
  messagingSenderId: "1050276568453",
  appId: "1:1050276568453:web:fb550838580c69b6f5b8ec",
  measurementId: "G-GNMXX8GD08"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error(error);
    }
  }

  return userRef;

}






firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;