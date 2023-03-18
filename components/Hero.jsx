"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/static/images/hero-image.png";
import previousClientsData from "@/data/previousClientsData";
import CallToAction from "@/components/CallToAction";



const Hero = () => {
  const preHeadingText = "Get Your Store Migrated to";
  const headingText = "Google Analytics 4";
  const postHeadingText = ".";
  const subHeadingText =
    "Our expert tracking setup service will ensure that your ecommerce store is set up correctly and ready to start collecting valuable data.";
  // const imageLinks = [
  //   "/static/images/hero-image.png",
  //   "/static/images/hero-image.png",
  //   "/static/images/hero-image.png",
  // ];
  const callToActionText = "Migrate Your Store to GA4";

  return (
    <section
      id="hero"
      className="flex flex-col  items-center justify-center text-center sm:p-4 gap-4 sm:pt-8"
      aria-label="hero section"
    >
      <h2 className="sm:text-6xl text-4xl tracking-tight leading-tight font-bold pt-4 pb-2 ">
        {preHeadingText}{" "}
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black ">
          {headingText}
        </span>
        {postHeadingText}
      </h2>

      <p className="text-base text-gray-300 pb-3 sm:pb-5">{subHeadingText}</p>
      <CallToAction callToActionText={callToActionText} />
      <Script
        strategy="beforeInteractive"
        src="https://player.vimeo.com/api/player.js"
      />
      <div className="md:w-[75%] md:pt-[45%] pt-[56.25%] w-full h-0 relative">
        <iframe
          src="https://player.vimeo.com/video/807730528?h=98a5bf96e1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Watch Me"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
