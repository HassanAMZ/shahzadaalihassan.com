const WordFlow = () => {
    const process = [
        {
            id: 1,
            heading: "Brief and Payments",
            description:
                "After purchasing the project, send requirements so Shahzada can start the project.",
        },
        {
            id: 2,
            heading: "Configuring DataLayer on the Store.",
            description:
                "Everything starts with the dataLayer configuration on your Ecommerce store.",
        },
        {
            id: 3,
            heading: "Configuring GTM's Tags",
            description:
                "Once we have the DataLayer on the site, we set up GTM and configure the tracking for GA4.",
        },
        {
            id: 4,
            heading: "Testing & Publishing Changes",
            description: "Once we test can everything, we publish the GTM Container.",
        },
        {
            id: 5,
            heading: "Review the work, and provide feedback.",
            description: "Closing off the project with feedback from you.",
        },
    ];
    const processList = process.map((process, index) => {
        return (
            <div
                key={index}
                className={`mb-4 flex justify-between  items-center w-full left-timeline  ${index == 0 || index == 2 || index == 4
                    ? " left-timeline flex-row-reverse"
                    : "right-timeline flex-row"
                    }`}
            >
                <div className="order-1 w-5/12"></div>
                <div
                    className={`order-1 w-5/12 px-1 py-4 ${index === 0 || index === 2 || index === 4
                        ? "text-right"
                        : "text-left"
                        }`}
                >
                    <p className="mb-3 text-base text-pink-300">
                        Step {" - "}
                        {process.id}
                    </p>
                    <h4 className="mb-3 font-bold text-lg lg:text-2xl">
                        {process.heading}
                    </h4>
                    <p className="text-sm lg:text-base leading-snug text-gray-50 text-opacity-100">
                        {process.description}
                    </p>
                </div>
            </div>
        );
    });
    return (
        <section className="py-4 flex flex-col text-center lg:text-left items-start lg:flex-row lg:my-8">
            <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 lg:mt-12 px-8">
                <p className="text-pink-300 uppercase tracking-loose">
                    This is how it goes down
                </p>
                <p className="text-3xl lg:text-4xl leading-normal lg:leading-relaxed mb-2">
                    Our Workflow
                </p>
                <p className="text-sm lg:text-base text-gray-50 mb-4">
                    Working with us is smooth as this timeline
                </p>
            </div>
            <div className="lg:ml-0 mx-auto lg:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div
                            className="border-2-2 border-pink-555 absolute h-full border"
                            style={{ right: "50%", border: "2px solid #FFC100" }}
                        ></div>
                        <div
                            className="border-2-2 border-pink-555 absolute h-full border"
                            style={{ right: "50%", border: "2px solid #FFC100" }}
                        ></div>

                        {processList}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WordFlow;
