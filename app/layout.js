"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import { useUser, signOut } from "../app/lib/auth";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const font = inter.className;

export default function RootLayout({ children }) {
  const user = useUser();
  return (
    <html lang="en">
      <body className={`${font} relative `}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
