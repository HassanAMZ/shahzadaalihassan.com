import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/static/images/hero-image.png";
import previousClientsData from "../public/data/previousClientsData";

const HeroImage = ({ imageLinks }) => {
  return imageLinks.map((imageLink, index) => {
    return (
      <Image
        key={index}
        className="relative z-30 inline object-cover w-7 h-7 border-2 border-white rounded-full"
        src={imageLink}
        alt="Profile image"
        width={40}
        height={40}
      />
    );
  });
};

export function CallToAction({ callToActionText, imageLinks }) {
  const ctaText = callToActionText ? callToActionText : null;
  const imgLinks = imageLinks ? imageLinks : null;

  return (
    <div className="relative flex gap-8 items-start  justify-center group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button className="relative px-5 py-3 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span className="flex items-center space-x-3">
          <div className="-space-x-3 flex">
            {imgLinks && <HeroImage imageLinks={imgLinks} />}
          </div>
          {ctaText && <span className="text-gray-100">{ctaText} &rarr;</span>}
        </span>
      </button>
    </div>
  );
};


const Clients = () => {
  return previousClientsData.map((client, index) => {
    return (
      <h3
        className={`${index === 5 ? "sm:col-start-2" : ""
          } sm:col-span-2 border-solid border-2 border-gray-800 shadow-sm shadow-pink-500 p-1 sm:p-4 text-gray-200`}
        key={index}
      >
        {client.clientName}
      </h3>
    );
  });
};


const Hero = () => {
  const preHeadingText = "Get Your Store Migrated to";
  const headingText = "Google Analytics 4";
  const postHeadingText = ".";
  const subHeadingText =
    "Say goodbye to Universal Analytics (UA) and hello to the future of Google Analytics 4 (GA4). Our expert tracking setup service will ensure that your ecommerce store is set up correctly and ready to start collecting valuable data.";
  const imageLinks = [
    "/static/images/hero-image.png",
    "/static/images/hero-image.png",
    "/static/images/hero-image.png",
  ];
  const callToActionText = "Get in touch";

  return (
    <section
      id="hero"
      className="flex flex-col  items-center justify-center text-center p-4 gap-3 pt-8"
      aria-label="hero section"
    >
      <h2 className="text-7xl font-bold pt-4 pb-2 ">
        {preHeadingText}{" "}
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black ">
          {headingText}
        </span>
        {postHeadingText}
      </h2>

      <p className="text-sm text-gray-300 pb-3 sm:pb-5">
        {subHeadingText}
      </p>
      <CallToAction
        imageLinks={imageLinks}
        callToActionText={callToActionText}
      />
      <Script
        strategy="beforeInteractive"
        src="https://player.vimeo.com/api/player.js"
      />
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "0",
          paddingBottom: "28.125%",
        }}
      >
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
      <div className="sm:max-w-2xl lg:max-w-full P-4">
        <p className="pb-6 "> Clients we have worked with</p>
        <div className="gap-3 grid grid-cols-3 sm:grid-cols-10 lg:flex lg:flex-wrap lg:flex-row text-center justify-center place-content-center">
          <Clients />
        </div>
      </div>
    </section>
  );
};

export default Hero;
