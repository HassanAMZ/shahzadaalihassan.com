"use client";

import { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        {
            faqQuestion: "Are you a native English speaker?",
            faqAnswer: `No, however, I am fluent in English. I have been studying the English language for over 12 years now and have an IELTS score of 7.0.`,
        },
        {
            faqQuestion: "Can you migrate existing Google Analytics (UA) to Ga4?",
            faqAnswer: `Yes, we can migrate to GA4 and the process depends on the website CMS (Shopify, WordPress, Custom Built) and the Nature of the site (Lead generation or e-commerce). Based on these we configure the datalayer to track the events in GA4.`,
        },
        {
            faqQuestion:
                "Which website CMS (Shopify, WordPress, Custom Built) do you work with?",
            faqAnswer: `I work mostly on CMS such as Shopify, Wordpress, ReactJs, NextJs, and NodeJs Sites.`,
        },
        {
            faqQuestion:
                "Can you configure tracking for a Lead generation or an e-commerce site?",
            faqAnswer: `Yes, I have experience setting up conversion tracking, enhanced eCommerce events, outbound affiliate links tracking, and Facebook, Google, and Pinterest remarketing tags for ads.`,
        },
        {
            faqQuestion: "Can you configure the google tag manager server container?",
            faqAnswer: `Yes, I can configure the GTM Server container with either google cloud console or stape.io servers.`,
        },
    ];

    return (


        <div className="w-full py-8">

            <div className="flex flex-col items-center">
                <h2 className="font-bold text-5xl mt-5 tracking-tight">
                    FAQ
                </h2>
                <p className="text-xl mt-3">
                    Some questions that you might have!
                </p>
            </div>
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                    <button
                        className="flex text-left justify-between w-full p-4 focus:outline-none"
                        onClick={() => handleClick(index)}
                    >
                        <span className="text-lg font-medium">{item.faqQuestion}</span>
                        <svg
                            className={`w-5 h-5 transition-transform ${activeIndex === index ? "transform rotate-180" : ""
                                }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 14.586L4.707 9.293a1 1 0 011.414-1.414L10 11.757l3.879-3.879a1 1 0 111.414 1.414L10 14.586z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        className={`p-4 transition-height ${activeIndex === index ? "h-auto" : "h-0 hidden"
                            }`}
                    >
                        <p className="">{item.faqAnswer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
