import React from "react";

const Features = () => {
    const features = [
        {
            icon: "fas fa-code",
            title: "Our Customized Approach",
            description:
                "Instead of taking a one-size-fits-all approach, we provide a customized approach to each client based on their specific business needs and goals. This can include tailored tracking solutions, personalized migration plans, and ongoing support to ensure the migration is successful.",
        },
        {
            icon: "fas fa-laptop",
            title: "Transparent Communication",
            description:
                "We maintain clear and transparent communication with our clients throughout the entire migration process. This includes regular updates on progress, detailed explanations of technical processes, and answering any questions or concerns the client may have in a timely manner.",
        },
        {
            icon: "fas fa-cog",
            title: "Post-Migration Optimization",
            description:
                "In addition to handling the migration process, you offer post-migration optimization services to help you get the most out of their GA4 implementation. This can include setting up custom reports and dashboards, conducting data analysis, and providing recommendations for how to improve the client's tracking and reporting capabilities.",
        },
    ];

    return (

        <div className="flex flex-wrap pt-4">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className="w-full md:w-1/3 px-4 py-2 md:mb-0 text-center"
                >
                    <div className="bg-gray-800 rounded-lg py-4 px-2">
                        <h3 className="text-xl font-bold ">{feature.title}</h3>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Features;
