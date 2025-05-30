"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { requestAdminNotificationPermission } from "@/lib/requestAdminPermission";
import { onMessage, isSupported } from "firebase/messaging";
import { getMessagingInstance, initFCM } from "@/lib/firebaseClient";

const AdminDashboard = () => {
  const [notificationsSupported, setNotificationsSupported] = useState(false);

  useEffect(() => {
    const setupNotifications = async () => {
      try {
        // Initialize Firebase Cloud Messaging service worker
        await initFCM();

        // Check if messaging is supported
        const supported = await isSupported();
        setNotificationsSupported(supported);

        if (supported) {
          const adminId = "1LNWLi4RsKUwQEvU8If8ON4tZ0o1"; 
          await requestAdminNotificationPermission(adminId);

          // Get messaging instance safely
          const messagingInstance = await getMessagingInstance();
          
          if (messagingInstance) {
            // Set up message handler
            const unsubscribe = onMessage(messagingInstance, (payload) => {
              console.log("Push message received:", payload);
              
              // Show notification using the Notification API if available
              if (Notification.permission === "granted" && payload.notification) {
                const { title, body } = payload.notification;
                new Notification(title || "New notification", {
                  body: body || "You have a new notification",
                  icon: "/favicon.ico"
                });
              } else {
                // Fallback to alert if notifications not granted
                alert(payload.notification?.title + ": " + payload.notification?.body);
              }
            });
            
            // Clean up subscription on unmount
            return () => unsubscribe();
          }
        } else {
          console.log("Firebase messaging is not supported in this browser");
        }
      } catch (error) {
        console.error("Error setting up notifications:", error);
      }
    };

    setupNotifications();
  }, []);

  return (
    <div className="p-5 font-pop">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
      {!notificationsSupported && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4">
          <p>Push notifications are not supported in this browser.</p>
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-4 mt-5">
        <Link href="/admin/meals">
          <div className="border p-4 text-center cursor-pointer">Manage The Meals</div>
        </Link>
        <Link href="/admin/orders">
          <div className="border p-4 text-center cursor-pointer">{"Today's"} Orders</div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;