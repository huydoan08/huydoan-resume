import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrintButton from '@/components/PrintButton';
import DownloadPDFButton from '@/components/DownlaodPDFButton';
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Huy Doan (Hugo)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <div className="print:hidden absolute top-1 left-1">
        </div>
        <div className="absolute top-1 right-1 flex gap-2">
          {/* <DownloadPDFButton /> */}
          <PrintButton />
        </div>
      </body>
    </html>
  );
}
