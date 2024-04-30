import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import Home_2 from "@/components/home_2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pumin's Portfolio",
  description: "Create by using nextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Home_2 />
      </body>
    </html>
  );
}
