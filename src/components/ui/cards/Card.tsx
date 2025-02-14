import Image from "next/image";
import React, { ReactElement } from "react";
import Typography from "../Typography";

interface CardProps {
  index?: number | string;
  icon: string;
  title: string;
  description: string | ReactElement;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const NumberCircle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-[50px] rounded-full w-[50px] bg-white"></div>

      {/* Circle with Number */}
      <div className="relative z-10 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
        <p className="text-2xl font-bold text-primary-blue">{children}</p>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  index,
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center bg-white rounded-[20px] shadow-lg p-6 xl:p-8 transition-transform relative h-full ${className}`}
    >
      {/* Icon Container */}
      <div className="absolute -top-5 left-[-5%] mb-4">
        <div className="pulsing-icon mx-auto">
          <div className="pulse2"></div>
          <div className="pulse2"></div>
          <div className="pulse3"></div>
          <div className="icon1">
            <NumberCircle>{index}</NumberCircle>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center pt-12 pb-4 h-full">
        <div className="mb-4 flex justify-center">
          <Image
            src={icon}
            alt={title}
            width={70}
            height={70}
            className="object-contain w-[37px] xl:w-[70px]"
          />
        </div>
        <Typography
          as="h4"
          className="text-center mb-4"
          color="text-primary-blue"
        >
          {title}
        </Typography>
        <Typography
          as="p"
          variant="caption"
          className="text-center line-clamp-4"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
