import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Init firebase
const app = initializeApp(firebaseConfig);

// init service
const appFirestore = getFirestore(app);
const appStorage = getStorage(app);
const appAuth = getAuth(app);
const emailProvider = new GoogleAuthProvider();
// timestamp
const timestamp = appFirestore.timestamp;

export { appStorage, timestamp, appAuth, appFirestore, emailProvider };
