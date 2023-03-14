import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/static/images/hero-image.png";
import previousClientsData from "../public/data/previousClientsData";

import Script from "next/script";

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

const CallToAction = ({ callToActionText, imageLinks }) => {
  return (
    <div className="relative flex gap-8 items-start justify-center group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button className="relative px-5 py-3 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span className="flex items-center space-x-3">
          <div className="-space-x-3 flex">
            <HeroImage imageLinks={imageLinks} />
          </div>
          <span className="text-gray-100">{callToActionText} &rarr;</span>
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
          } sm:col-span-2 border-solid border-2 border-gray-800 shadow-sm shadow-pink-500 p-1 sm:p-4 text-gray-500`}
        key={index}
      >
        {client.clientName}
      </h3>
    );
  });
};
const Hero = ({
  preHeadingText,
  postHeadingText,
  headingText,
  callToActionText,
  imageLinks,
  subHeadingText,
}) => {
  return (
    <section
      id="hero"
      className="flex flex-col  items-center justify-center text-center gap-3 pt-8"
      aria-label="hero section"
    >
      <h2 className="text-3xl sm:text-7xl font-bold pt-4 pb-2 ">
        {preHeadingText}{" "}
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black ">
          {headingText}
        </span>
        {postHeadingText}
      </h2>
      <p className="text-xs sm:text-lg text-gray-300 pb-3 sm:pb-5">
        {subHeadingText}
      </p>
      <CallToAction
        imageLinks={imageLinks}
        callToActionText={callToActionText}
      />
      <Script strategy="beforeInteractive" src="https://player.vimeo.com/api/player.js" />

      <div className="" style={{ padding: "56.25% 90% 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/807730528?h=98a5bf96e1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          title="Watch Me"
        ></iframe>
      </div>

      <div className="p-3 max-w-2xl">
        {/* <p className="text-md pb-5">Trusted Clients</p> */}
        <div className="gap-3 grid grid-cols-3 sm:grid-cols-10 text-center justify-center">
          <Clients />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const imageLinks = [
    "/static/images/hero-image.png",
    "/static/images/hero-image.png",
    "/static/images/hero-image.png",
  ];
  return (
    <main>
      {/* <Hero
        preHeadingText="Get more out of Your"
        headingText="Marketing Budget"
        postHeadingText="."
        subHeadingText="Discover the Range of Web Analytics Services Offered for Small Businesses -  Tailored Solutions to Boost Conversions and Improve Online Performance!"
        imageLinks={imageLinks}
        callToActionText="Book a Consultation"
      /> */}

      {/* <Hero
        preHeadingText="Breaking Through the"
        headingText="Freelance Income"
        postHeadingText="Ceiling"
        subHeadingText="Advanced Strategies and Expert Insights to Help Skilled Professionals
        Increase Their Freelancing Income and Achieve Success!"
        imageLinks={imageLinks}
        callToActionText="Join the community"
      /> */}
      <Hero
        preHeadingText="Get Your Ecommerce Store Migrated to"
        headingText="Google Analytics 4"
        postHeadingText="."
        subHeadingText="Discover the Range of Web Analytics Services Offered for Small Businesses -  Tailored Solutions to Boost Conversions and Improve Online Performance!"
        imageLinks={imageLinks}
        callToActionText="Book a Consultation"
      />
    </main>
  );
}
