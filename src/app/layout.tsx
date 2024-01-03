import type { Metadata } from "next";
import { Inter, Lexend_Exa } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const lexend = Lexend_Exa({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "Cube Project - Oliver Sinclair",
  description: "Cube Personal Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
