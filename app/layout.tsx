import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from 'next/font/google'
 
const roboto = Mulish({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "HelpMeet Charity",
  description: "Charity Program for Students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-gray-200 ${roboto.className} relative`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
