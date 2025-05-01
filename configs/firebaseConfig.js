// configs/firebaseClientConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
import { getMessaging, isSupported } from "firebase/messaging";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize messaging only in browser environments
let messagingInstance = null;
if (typeof window !== 'undefined') {
  // Check if messaging is supported before initializing
  isSupported().then(isSupported => {
    if (isSupported) {
      messagingInstance = getMessaging(app);
      console.log("Firebase messaging initialized");
    } else {
      console.log("Firebase messaging is not supported in this browser");
    }
  });

  // Set auth persistence only in browser environments
  setPersistence(auth, browserLocalPersistence)
    .then(() => console.log("Auth persistence set"))
    .catch((error) => console.error("Auth persistence error:", error));
}

export const messaging = messagingInstance;