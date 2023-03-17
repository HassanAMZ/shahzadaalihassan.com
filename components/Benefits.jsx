"use client";

import { Fragment } from "react";
import Features from "./Features";

const benefits = [
    {
        title: "Increase Sales",
        description:
            "Get insights on what products or services are selling the most and optimize your marketing strategy to increase sales.",
    },
    {
        title: "Track User Behavior",
        description:
            "Track user behavior on your website or app to understand how they interact with your products or services and improve their experience.",
    },
    {
        title: "Data-Driven Decisions",
        description:
            "Make informed decisions with data-driven insights to improve your business and stay ahead of your competitors.",
    },
];

export default function Benefits() {
    return (
        <div className="py-16 px-4">
            <h2 className=" text-6xl font-bold font-heading text-center tracking-px-n leading-tight">
                Do not waste more TIME!
            </h2>
            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                    {benefits.map((benefit) => (
                        <Fragment key={benefit.title}>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">

                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-white">
                                        {benefit.title}
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-400">
                                    {benefit.description}
                                </dd>
                            </div>
                        </Fragment>
                    ))}
                </dl>
            </div>
        </div>
    );
}
