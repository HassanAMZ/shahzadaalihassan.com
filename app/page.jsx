import Hero from "@/components/Hero";
import WordFlow from "@/components/WordFlow";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Testimonial from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="text-center p-2 grid place-content-center h-screen">
        <Link href="/google-analytics-4">
          <h2 className="text-6xl tracking-tight leading-tight font-bold pt-4 pb-2 underline text-blue-400">
            Google Analytics 4 Migration Services
          </h2>
        </Link>
      </main>
    </>
  );
}
