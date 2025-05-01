"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { requestAdminNotificationPermission } from "@/lib/requestAdminPermission";
import { onMessage } from "firebase/messaging";
import { messaging } from "@/configs/firebaseConfig";

const AdminDashboard = () => {
  useEffect(() => {
    const adminId = "1LNWLi4RsKUwQEvU8If8ON4tZ0o1"; 
    requestAdminNotificationPermission(adminId);

    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Push message received:", payload);
      alert(payload.notification?.title + ": " + payload.notification?.body);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    }
  }, []);
  

  return (
    <div className="p-5 font-pop">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <Link href="/admin/meals">
          <div className="border p-4 text-center cursor-pointer">Manage Meals</div>
        </Link>
        <Link href="/admin/orders">
          <div className="border p-4 text-center cursor-pointer">{"Today's"} Orders</div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
