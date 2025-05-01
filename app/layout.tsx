import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/home/Navbar";

import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";


export const metadata: Metadata = {
  title: "Sdm Bakery",
  description: "Flavour of Fellowship",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AuthProvider>
        <div>
          <Navbar/>
        </div>
        <Toaster/>
        {children}
        <div className="">
        {/* <BottomBar /> */}
      </div>
      </AuthProvider>
      </body>
    </html>
  );
}
