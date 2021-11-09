import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCF-HSQzX2ifUwgaNv2mGs0hjvsoISnQ5g",
    authDomain: "crown-db-53092.firebaseapp.com",
    projectId: "crown-db-53092",
    storageBucket: "crown-db-53092.appspot.com",
    messagingSenderId: "360826850576",
    appId: "1:360826850576:web:fc1550be6e9e535b7a6995",
    measurementId: "G-161V8587N5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }
        catch(err) {
            console.log('Error creating user', err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;