"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/static/images/hero-image.png";
import previousClientsData from "@/data/previousClientsData";

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
    const ctaText = callToActionText ? callToActionText : null;
    const imgLinks = imageLinks ? imageLinks : null;

    return (
        <>
            <div className="relative flex gap-8 items-start  justify-center group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur  opacity-75 group-hover:opacity-100 transition duration-50 group-hover:duration-50 animate-tilt"></div>
                <Link
                    href="/google-analytics-4/lets-talk"
                    className="relative p-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
                >
                    <span className="flex items-center space-x-3">
                        <div className="-space-x-3 flex">
                            {imgLinks && <HeroImage imageLinks={imgLinks} />}
                        </div>
                        {ctaText && (
                            <span className="text-gray-100 font-bold">{ctaText} &rarr;</span>
                        )}
                    </span>
                </Link>
            </div>
        </>
    );
};

export default CallToAction;
