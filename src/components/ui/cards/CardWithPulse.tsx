"use client";

import Image from "next/image";
import React, { useState } from "react";
// import Button from "../Button";
import Typography from "../Typography";
// import icons from "@/components/utils/Icons";
import "../style.css";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const CardWithPulse: React.FC<CardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col items-center bg-white rounded-[20px] shadow-lg p-4 md:p-6 transition-transform h-full relative ${
        className || ""
      }`}
    >
      {/* Icon */}
      <div className="relative -top-12 left-[-0%]">
      {/* <div className="absolute -top-10 md:-top-12 left-1/2 -translate-1/2 z-20"> */}
        <div className="">
          <div className="pulsing-icon">
            <div className="pulse"></div>
            <div className="pulse"></div>
            <div className="pulse1"></div>
            <div className="icon">
              <Image
                src={icon}
                alt={title}
                // className="z-10 w-12 h-12 md:w-16 md:h-16"
                className="z-10"
                // width={25}
                // height={25}
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pulse Container */}
      {/* <div className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="pulse-circle"></div>
            <div className="pulse-circle delay-1"></div>
            <div className="pulse-circle delay-2"></div>
          </div>
          <div className="relative z-10 bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
            <Image
              src={icon}
              alt={title}
              className="w-8 h-8 md:w-10 md:h-10"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div> */}

      {/* Content Container */}
      <div className="flex flex-col items-center h-full w-full pt-16 pb-4">
        <Typography
          as="h4"
          className="text-center mb-3 md:mb-4 text-lg md:text-xl font-semibold min-h-[56px] flex items-center justify-center"
          color="text-primary-blue"
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          as="p"
          variant="caption"
          className={`text-center text-sm md:text-base leading-snug ${
            expanded ? "" : "line-clamp-4 md:line-clamp-3"
          }`}
        >
          {description}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary-blue text-sm mt-2 md:hidden"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </Typography>
      </div>

      {/* <div className="text-center"> */}
      {/* <Typography
          as="h4"
          className="text-center whitespace-nowrap"
          color="text-primary-blue"
        >
          {title}
        </Typography> */}
      {/* Description */}
      {/* <p className="mt-2">{description}</p> */}

      {/* Title */}
      {/* </div> */}
    </div>
  );
};

export default CardWithPulse;
// function useState(arg0: boolean): [any, any] {
//   throw new Error("Function not implemented.");
// }

