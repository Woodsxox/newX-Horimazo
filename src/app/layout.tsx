import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SessionProvider from "./SessionProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Horimazo",
  description:
    "Horimazo, Shop fast, Shop smart! Offering unique products and secure shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-100 ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <SessionProvider>
          <Navbar />
          <div>
            <h1>hello</h1>
          </div>
          <main className=" flex-grow p-4 max-w-7xl m-auto min-w[300px]">{children}</main>
            <div>
            <h1>hello</h1>
          </div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
