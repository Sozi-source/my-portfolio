import React from "react";
import Footer from "@/components/common/Footer";
import "./globals.css";
import Header from "@/components/common/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Wilfred Osozi Portfolio</title>
      </head>
     
      <body className="min-h-screen flex flex-col">
         <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
