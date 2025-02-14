import Image from "next/image";
import React from "react";
import Typography from "./Typography";
import icons from "../utils/Icons";
const CommonHeader = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-2 py-4">
      <Image src={icons.tickBox} alt="tick" width={37} height={37} />
      <Typography as="h3" color={color}>
        {children}
      </Typography>
    </div>
  );
};

export default CommonHeader;
