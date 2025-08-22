import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PAULOTAM GLOBAL SERVICES LTD", 
  description: "Your Reliable Partner in Distribution, Construction, and Global Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}