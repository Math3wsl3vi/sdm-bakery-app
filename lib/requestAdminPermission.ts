// lib/requestAdminPermission.ts
import { getToken } from "firebase/messaging";
import { doc, setDoc } from "firebase/firestore";
import { db, messaging } from "@/configs/firebaseConfig";

export const requestAdminNotificationPermission = async (adminId: string) => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BMCvhAYTqi1FhNcpkZlEs8BhWPLVf9CvXTo0iywG3eNxtxNFrKls0R1_igwuxU3gzY_kmhuT-4gIqAbUIk5AOVw",
      });
      console.log("FCM Token:", token);

      if (token) {
        // Save token in Firestore
        await setDoc(doc(db, "admins", adminId), { fcmToken: token }, { merge: true });
        console.log("FCM Token saved for admin:", token);
      }
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};
