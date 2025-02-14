"use client";

import React from "react";
import "./style.css"; // Import the custom CSS file

const NewsSection = () => {
  const percentage1 = 78.6; // First circle percentage
  const percentage2 = 85.8; // Second circle percentage

  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const strokeDashoffset1 = circleCircumference - (percentage1 / 100) * circleCircumference;
  const strokeDashoffset2 = circleCircumference - (percentage2 / 100) * circleCircumference;

  return (
    <section className="p-8 md:p-4 bg-gray-100 max-w-screen-xl mx-auto">
      {/* Icon and Heading Section */}
      <div className="flex flex-row md:flex-row items-center justify-center md:justify-start mb-4">
        <div className="bg-gray-400 w-12 h-12 flex items-center justify-center rounded-full mb-4">
          <img
            src="/icons/section-icon.png"
            alt="Section Icon"
            className="w-8 h-8"
          />
        </div>
        <h1 className="text-lg md:text-2xl font-bold text-[#11344E] md:ml-4 text-center md:text-left">
          WHY CHOOSE US
        </h1>
      </div>

      {/* Flex Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Content Section */}
        <div className="flex-1">
          {/* Gradient Banner */}
          <div className="md:text-left bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-4 rounded-lg">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent">
              More Than 10+ Years Experience
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent">
              WE Provide IT SERVICES
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="md:text-left my-6">
            <p className="text-gray-600 text-sm md:text-base">
              Collaboratively envisioned user-friendly supply chains and cross-unit imperative. Authoritatively fabricate competitive resources and holistic. Holistically restore real-time resources whereas standardized networks.
            </p>
          </div>

          {/* Circular Progress Bars */}
          <div className="flex flex-row md:flex-row items-center gap-8">
            {/* First Circle */}
            <div className="flex items-center space-x-4">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="transform -rotate-90 md:w-[100px] md:h-[100px]"
              >
                <circle
                  cx="60"
                  cy="60"
                  r={circleRadius}
                  stroke="#11344E"
                  strokeWidth="7"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r={circleRadius}
                  stroke="#F38023"
                  strokeWidth="7"
                  fill="none"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={strokeDashoffset1}
                  strokeLinecap="round"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="24"
                  fill="#11344E"
                  fontWeight="bold"
                  transform="rotate(90 60 60)"
                >
                  {percentage1}%
                </text>
              </svg>
              <div>
                <h3 className="text-xs md:text-base font-bold text-[#11344E] mb-2">
                  BUSINESS GROW
                </h3>
                <p className="text-xs text-gray-600">
                  Efficiently transition top-line ideas before market.
                </p>
              </div>
            </div>

            {/* Second Circle */}
            <div className="flex items-center space-x-4">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="transform -rotate-90 md:w-[100px] md:h-[100px]"
              >
                <circle
                  cx="60"
                  cy="60"
                  r={circleRadius}
                  stroke="#11344E"
                  strokeWidth="7"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r={circleRadius}
                  stroke="#F38023"
                  strokeWidth="7"
                  fill="none"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={strokeDashoffset2}
                  strokeLinecap="round"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="24"
                  fill="#11344E"
                  fontWeight="bold"
                  transform="rotate(90 60 60)"
                >
                  {percentage2}%
                </text>
              </svg>
              <div>
                <h3 className="text-xs md:text-base font-bold text-[#11344E] mb-2">
                  QUALITY PRODUCTS
                </h3>
                <p className="text-xs text-gray-600">
                  Efficiently transition top-line ideas before market.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-8 text-center md:text-left">
            <button className="flex items-center justify-center md:justify-start text-[#ffffff] bg-[#11344E] hover:bg-[#003366] px-6 py-2 rounded-lg text-sm md:text-lg font-semibold">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 md:w-6 h-5 md:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src="/images/news-section-image.jpg"
            alt="Why Choose Us"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
