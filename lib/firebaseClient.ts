// lib/firebaseClient.ts
import { app } from "@/configs/firebaseConfig";
import { getMessaging, isSupported } from "firebase/messaging";

// Function to get the messaging instance safely
export const getMessagingInstance = async () => {
  if (typeof window === 'undefined') return null;
  
  try {
    const isFCMSupported = await isSupported();
    if (isFCMSupported) {
      return getMessaging(app);
    } else {
      console.log("Firebase Cloud Messaging is not supported in this browser");
      return null;
    }
  } catch (error) {
    console.error("Error initializing Firebase messaging:", error);
    return null;
  }
};

// Initialize FCM service worker
export const initFCM = async () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
    console.log('Service worker registered:', registration);
  } catch (error) {
    console.error('Service worker registration failed:', error);
  }
};