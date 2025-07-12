import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/shared/Header";
import Footer from "@/shared/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
