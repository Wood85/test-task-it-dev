import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "HarmonyHR",
  description: "Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

			<html lang="en">
        <body
          className={`${inter.variable} font-inter antialiased overflow-x-hidden`}
        >
          <main>{children}</main>
					<Toaster />
        </body>
      </html>
  );
}
