import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yousef negm",
  description: "yousef Negm, a fullstack developer, and aspiring software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={`${inter.className} antialiased max-w-3xl mb-40 flex flex-col mx-4 mt-8 lg:mx-auto`}>
            <Navbar />
            {children}
            <SpeedInsights />
      </body>
    </html>
  );
}
