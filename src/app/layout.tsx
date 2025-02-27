import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Bartlomiej Treska's Personal Website",
  icons: ["/favicon.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute inset-0 bg-[url('/background-image.jpg')] bg-cover bg-center opacity-25 -z-10" />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow xl:w-[80rem] flex flex-col gap-8 sm:items-start px-4 mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
