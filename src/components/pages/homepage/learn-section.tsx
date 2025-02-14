"use client";
import React from "react";

const ResponsiveCards = () => {
  const cards = [
    {
      title: "CONSOLIDATE",
      description:
        "Consolidate systems and applications to reduce operating expenses",
      icon: "/learn-icons/consolidate.png",
    },
    {
      title: "OPTIMIZE",
      description:
        "Tune and automate systems and applications to improve applications performance, scalability and reliability.",
      icon: "/learn-icons/optimize.png",
    },
    {
      title: "INNOVATE",
      description:
        "Deliver new applications and services rapidly to meet changing business needs.",
      icon: "/learn-icons/innovate.png",
    },
    {
      title: "ACCELERATE",
      description: "Enable fast, secure and integrated business environments.",
      icon: "/learn-icons/accelerate.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-8 bg-gray-100">
      {/* Icon and Heading */}
      <div className="flex flex-row items-center mb-8">
        {/* Add the icon before the heading */}
        <div className="bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full mr-4">
          <img
            src="/icons/section-icon.png" // Replace with your icon source
            alt="Section Icon"
            className="w-8 h-8"
          />
        </div>
        <h1 className="text-lg font-bold text-[#11344E] text-center">
          LEARN OUR ENGAGEMENT PROCESS
        </h1>
      </div>

      {/* Cards */}
      <div className="w-full max-w-screen-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-white p-4 sm:p-8 mb-6 shadow-lg rounded-lg hover:shadow-xl transition duration-75 relative"
          >
            {/* Connective Icon Behind the Card (Between Cards) */}
            {index < cards.length - 1 && (
              <div className="absolute right-[-35px] sm:right-[-65px] top-1/2 transform -translate-y-1/2 z-[-1] flex md:block">
                <img
                  src="/learn-icons/line.png" // The connection icon between cards
                  alt="Connect Icon"
                  className="w-16 h-4 sm:w-24 sm:h-6" // Reduce width and height on mobile
                />
              </div>
            )}

            {/* Outer Circle (Larger, Blue) */}
            <div className="bg-[rgba(17,52,78,0.51)] w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-full absolute top-[-20px] left-[-20px] group-hover:animate-pulse duration-75">
              {/* Inner Circle (Smaller, Light Blue) */}
              <div className="bg-[#11344E] w-12 h-12 sm:w-16 sm:h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full">
                {/* Inner circle with number */}
                <div className="text-[#ffffff] text-xl font-bold sm:text-3xl">
                  {index + 1}
                </div>
              </div>
            </div>
            
            {/* Card Icon in the Center (without circle) */}
            <div className="mb-4">
              <img
                src={card.icon} // Use the custom icon for each card
                alt={`${card.title} Icon`}
                className="w-16 h-16" // Increased icon size
              />
            </div>

            <h3 className="text-[#11344E] text-lg font-bold text-gray-800 mt-4 mb-4 text-center w-full">
              {card.title}
            </h3>
            <p className="text-[#585858] text-sm text-gray-600 mb-6 text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveCards;
