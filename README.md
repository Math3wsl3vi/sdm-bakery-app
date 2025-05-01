# 🥖 SDM Bakery

**SDM Bakery** is a student-led, Christian Union initiative that provides freshly baked foodstuffs and snacks. Our mission is to serve the campus and surrounding communities with excellence, love, and quality products through smart ordering, management, and delivery.

## 🚀 Features

- 🧁 Admin panel to manage baked items, pricing, and orders  
- 📦 Customers can browse and place orders for delivery or pickup  
- 💵 **M-Pesa STK Push integration** for fast, secure payments  
- 🧠 Global state management using **Zustand**  
- 📱 **PWA support** for offline usage and mobile convenience  
- 🔒 Authentication with role-based access (admin & customer)  
- 🔔 Real-time order status updates and delivery tracking  
- 📊 Order history and sales analytics for admin users  

## 🛠️ Tech Stack

- **Frontend**: React / Next.js + Tailwind CSS + Shadcn UI  
- **State Management**: Zustand  
- **Backend**: Firebase (Firestore + Realtime Database)  
- **Authentication**: Firebase Auth  
- **Payments**: M-Pesa STK Push (via Node.js Express + Next API routes)  
- **Hosting**: Firebase Hosting / Vercel  
- **Database**: 
  - Firestore: product, order, and user data  
  - Realtime DB: live order status  


## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/math3wsl3v/chakula-hub-project-1.git
2. Navigate to the project directory:

   ```bash
   cd chakula-hub-project-1
   
3. Install dependencies:

    ```bash
    npm install
  
4. Set up environment variables:
Create a .env.local file in the root directory.
Add Firebase and M-Pesa API credentials.

5. Run the development server:
    ```bash
    npm run dev

💸 M-Pesa Integration

- Uses Daraja API via a custom Express server
- Secure STK push flow for meal payments
- Real-time payment status updates in Firestore

🧠 State Management with Zustand

- Lightweight global store for:
  - User session
  - Booking state
  - Real-time UI updates
- Easy to extend and debug

🧾 PWA Support

- Fully installable on Android/iOS via browser
- Offline fallback and caching support
- Manifest and service worker configured for smooth performance

💡 Use Cases

- University and hostel mess booking
- Hospital patient dietary tracking
- Corporate and staff meal scheduling

📄 License

This project is licensed under the MIT License.

Built with 🦇  by math3wsl3vi .
