importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDMFKwTzcTzFIpcBP_hmdlm6ci2D9pEJls",
  authDomain: "chat-app-76315.firebaseapp.com",
  projectId: "chat-app-76315",
  messagingSenderId: "72605827547",
  appId: "1:72605827547:web:0a62c8688e01bf527467fe",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
