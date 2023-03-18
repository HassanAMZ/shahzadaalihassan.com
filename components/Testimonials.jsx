"use client";
import previousClientsData from "@/public/data/previousClientsData";
import React from "react";
const Clients = () => {
    return previousClientsData.map((client, index) => {
        return (
            <h3
                className={`${index === 4 ? "col-start-2" : ""
                    } col-span-2 border-solid border-2 border-gray-800 shadow-sm shadow-pink-500 py-2 text-sm px-2 text-gray-200`}
                key={index}
            >
                {client.clientName}
            </h3>
        );
    });
};
const Testimonial = ({ testimonial }) => {
    return testimonial.map((testimony, index) => {
        const { date, testimonial, name, username } = testimony;
        return (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="p-6 h-full border rounded-4xl">
                    <div className="flex flex-col justify-between h-full">
                        {name || username ? (
                            <div className="mb-5 block">
                                <div className="flex flex-wrap mb-4 -m-2">
                                    {name ? (
                                        <div className="w-auto p-2">
                                            <h3 className="font-semibold leading-normal">{name}</h3>
                                            {username && (
                                                <p className="text-gray-500 uppercase">{username}</p>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="w-auto p-2">
                                            <p className="text-gray-500 uppercase">{username}</p>
                                        </div>
                                    )}
                                </div>
                                <p className="text-lg font-medium">{testimonial}</p>
                            </div>
                        ) : (
                            <div className="mb-5 block">
                                <p className="text-lg font-medium">{testimonial}</p>
                            </div>
                        )}
                        {date && (
                            <div className="block">
                                <p className="text-sm text-gray-500 font-medium">{date}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    });
};

const Testimonials = () => {
    const testimonials = [
        {
            name: "Akil Asghar",
            testimonial: "Great guy. Fast response ",
            date: "16th March 2023",
        },
        {
            name: "Christopher Hough",
            testimonial:
                "Incredible work. Goes above and beyond. Excellent communication. Works quickly. Gets job done and gets it done well! Would absolutely hire again.",
            date: "14th March 2023",
        },
        {
            name: "Chris Lister",
            testimonial:
                "amazing speedy and expert knowledge to fix some tracking issues I've had for more than 2 months. Spend the money, get an expert, save yourself the hassle. Thank you Hassan. Chris",
            date: "6th March 2023",
        },
        {
            name: "Daniel Shashko",
            testimonial:
                "Job completed successfully, recommended. I will definitely work with Shahzada Ali Hassan again in the future.",
            date: "19th Feb 2023",
        },
        {
            name: "Alin Zdroba",
            testimonial:
                "Rockstar in his field. Very specialized in this 'analytics' niche, true expert. He knows what he's doing every step of the way, outstanding communication, organization, etc from the first message to completion of project. Zero constructive criticism to provide, he is exactly the type of expert you wish you'd find for any specific need.",
            date: "10th Feb 2023",
        },
        {
            name: "Matthieu Chauveau",
            testimonial:
                "The job was done perfectly and on time. And he found the solutions to all the problems we were having!",
            date: "8th Feb 2023",
        },
    ];

    return (
        <section className="relative py-10 overflow-hidden ">
            <img
                className="absolute top-0 left-0"
                src="flaro-assets/images/testimonials/gradient.svg"
                alt=""
            />
            <img
                className="absolute bottom-0 right-0"
                src="flaro-assets/images/testimonials/gradient2.svg"
                alt=""
            />

            <div className="relative z-10 container px-4 mx-auto">
                <h2 className=" text-6xl font-bold font-heading text-center tracking-px-n leading-tight">
                    Don&apos;t just take my word for it
                </h2>
                <div className="gap-3 grid grid-cols-8 text-center p-8 justify-center place-content-center">
                    <Clients />
                </div>
                <div className="flex flex-wrap -m-3">
                    <Testimonial testimonial={testimonials} />
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
