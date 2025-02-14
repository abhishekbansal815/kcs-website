import React from "react";
import { clsx } from "clsx";

// Define variants and their respective classes
const typographyVariants = {
  body: "",
  caption: "text-[10px] lg:text-[12px] xl:text-[14px]",
  subHeading: "font-[500]",
};

// Define a utility type for valid variants
type TypographyVariant = keyof typeof typographyVariants;

// Define the Typography component props
interface TypographyProps {
  as?: React.ElementType;
  variant?: TypographyVariant;
  color?: string;
  align?: "left" | "center" | "right" | "justify"; // Alignment options
  className?: string;
  children: React.ReactNode;
}

// Typography component
const Typography: React.FC<TypographyProps> = ({
  as: Tag = "p",
  variant = "body",
  color = "",
  align = "left",
  className = "",
  children,
}) => {
  return (
    <Tag
      className={clsx(
        typographyVariants[variant],
        color,
        `text-${align}`,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
