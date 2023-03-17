import "@/css/globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GtmTrackingScript from "@/components/GtmTrackingScript";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shazadaalihassan",
  description: "Migrate to GA4 today",
};

export default function GoogleAnalytics4Layout({ children }) {
  return (
    <>{children}</>

  );
}
