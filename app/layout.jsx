import "@/css/globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GtmTrackingScript from "@/components/GtmTrackingScript";

let GTM_Tracking_ID = "GTM-MCKP7JK" || "";
const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  GTM_Tracking_ID = "GTM-MCKP7JK" || "";
} else {
  GTM_Tracking_ID = "GTM-XXXXXXX";
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shazadaalihassan",
  description: "Top rated web analytics on Upwork",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-900 text-gray-50 container mx-auto ${inter.className}`}
      >
        <GtmTrackingScript gtm_tracking_id={GTM_Tracking_ID} />
        <main>{children}</main>
      </body>
    </html>
  );
}
