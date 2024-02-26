import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from 'next/font/google'
import Head from "next/head";
 
const roboto = Mulish({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "HelpMeet Charity Program",
  description: "Empowering Lives Through Compasionate Support",
  applicationName: "HelpMeet",
  keywords: ["Donation","student","empower lives", "help student","helpmeet", "help", "meet", "support projects" ,"pay school fee","pay tuition fee", "provide studey materials" ,"Money" ],
  publisher: "Emmanuel Excellent",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/en-US" }
  },
  // Mobile-friendliness
  mobileFriendly: true
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
