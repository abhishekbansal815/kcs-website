import Image from "next/image";
import React from "react";
// import Button from "../Button";
import Typography from "../Typography";
// import icons from "@/components/utils/Icons";

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
  return (
    <div
      className={`flex flex-col items-center bg-white rounded-[20px] shadow-lg p-6 transition-transform ${className}`}
    >
      {/* Icon */}
      <div className="relative -top-12 left-[-0%]">
        <div className="">
          <div className="pulsing-icon">
            <div className="pulse"></div>
            <div className="pulse"></div>   
            <div className="pulse1"></div>        
            <div className="icon">
              <Image
                src={icon}
                alt={title}
                className="z-10"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Typography
          as="h4"
          className="text-center whitespace-nowrap"
          color="text-primary-blue"
        >
          {title}
        </Typography>
        {/* Description */}
        <p className="mt-2">{description}</p>

        {/* Title */}
      </div>
    </div>
  );
};

export default CardWithPulse;
