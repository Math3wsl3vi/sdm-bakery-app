// lib/requestAdminPermission.ts
import { getToken } from "firebase/messaging";
import { doc, setDoc } from "firebase/firestore";
import { isSupported, getMessaging } from "firebase/messaging";
import { db } from "@/configs/firebaseConfig";

export const requestAdminNotificationPermission = async (adminId: string) => {
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      console.error("Not in browser environment, cannot request notification permission");
      return;
    }

    // Check if notifications are supported
    if (!("Notification" in window)) {
      console.error("This browser does not support notifications");
      return;
    }

    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      // Check if Firebase messaging is supported
      const isMessagingSupported = await isSupported();
      
      if (!isMessagingSupported) {
        console.error("Firebase messaging is not supported in this browser");
        return;
      }

      // Get messaging instance
      const messagingInstance = getMessaging();
      
      const token = await getToken(messagingInstance, {
        vapidKey: "BMCvhAYTqi1FhNcpkZlEs8BhWPLVf9CvXTo0iywG3eNxtxNFrKls0R1_igwuxU3gzY_kmhuT-4gIqAbUIk5AOVw",
      });
      
      console.log("FCM Token:", token);

      if (token) {
        // Save token in Firestore
        await setDoc(doc(db, "admins", adminId), { fcmToken: token }, { merge: true });
        console.log("FCM Token saved for admin:", adminId);
      }
    } else {
      console.log("Notification permission denied");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};