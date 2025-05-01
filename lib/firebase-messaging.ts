// lib/firebase-messaging.ts
import { getMessaging, isSupported } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/configs/firebaseConfig";

const app = initializeApp(firebaseConfig);

export const initMessaging = async () => {
  const supported = await isSupported();
  if (!supported) return null;

  const messaging = getMessaging(app);
  return messaging;
};


