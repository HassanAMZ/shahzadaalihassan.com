import Hero from "@/components/Hero";
import WordFlow from "@/components/WordFlow";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Testimonial from "@/components/Testimonials";

export default function GoogleAnalytics4() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Features />
        <Testimonial />
        <Benefits />
        <WordFlow />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
