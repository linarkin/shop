import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOlS7wPqQu_XXLb9fwbbG9pVw6YVGNwPY",
    authDomain: "shop-clothing-70d08.firebaseapp.com",
    databaseURL: "https://shop-clothing-70d08.firebaseio.com",
    projectId: "shop-clothing-70d08",
    storageBucket: "shop-clothing-70d08.appspot.com",
    messagingSenderId: "685442721686",
    appId: "1:685442721686:web:eb8227c9e020450f819fb7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'promt': 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
