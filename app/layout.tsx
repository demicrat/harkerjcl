import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from '@/components/Banner';
import Navbar from '@/components/NavBar';
import BottomNav from '@/components/BottomNav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harker JCL",
  description: "Welcome to our page!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-green-50`}>
        <Banner />
        <Navbar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
