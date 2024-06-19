import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL('https://www.yousefnegm.dev/'),
  title: "yousef negm",
  description: "yousef negm, an aspiring software engineer.",
  openGraph: {
    images: '/opengraph-image.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={`${inter.className} bg-black text-white antialiased max-w-3xl mb-40 flex flex-col mx-4 mt-8 lg:mx-auto`}>
            <Navbar />
            
              {children} 
            
            
            <SpeedInsights />
            <Analytics />
      </body>
    </html>
  );
}
