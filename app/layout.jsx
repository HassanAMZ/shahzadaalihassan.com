import "@/css/globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shazadaalihassan",
  description: "Top rated web analytics on Upwork",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 text-gray-50 container mx-auto ${inter.className}`}>
        <main>{children}</main>

      </body>
    </html>
  );
}
