import { orbitron } from "./fonts";
import "./globals.css";
// import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import React from "react";


export const metadata = {
  title: "MARS Spotter",
  description: "Keep track of the sights of Mars via NASA's rovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-red-900 text-white">
        <SideNav />
        {children}
      </body>
    </html>
  );
}
