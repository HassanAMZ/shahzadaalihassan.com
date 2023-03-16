import Hero from "@/components/Hero";
import WordFlow from "@/components/WordFlow";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <WordFlow />
        <Features />
        <FAQ />
      </main>
    </>
  );
}
