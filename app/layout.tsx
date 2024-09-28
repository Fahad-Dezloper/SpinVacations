import React from 'react';
import './globals.css';
import type { Metadata } from "next";
import MainNav from "@/app/components/MainNav";
import TopNavigation from "@/app/components/TopNavigation";
import Footer from "@/app/components/Footer";


export const metadata: Metadata = {
  title: "Spin Vacations",
  description: "Home | Spin Vacations",
  icons: {
    icon: "/favicon.ico", // Update this path based on your favicon location
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        {/* Link Google Fonts manually */}
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TopNavigation />
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
