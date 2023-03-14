import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import NavBar from "@/app/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shazadaalihassan",
  description: "Top rated web analytics on Upwork",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 text-gray-50 container mx-auto ${inter.className}`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
