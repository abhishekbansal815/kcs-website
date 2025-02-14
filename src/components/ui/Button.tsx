import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

// Define button styles using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary-blue text-white",
        secondary:
          "bg-primary-orange text-primary-blue hover:bg-primary-orange focus:ring-gray-400",
        outline:
          "border border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-400",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
      },
      size: {
        xsm: "px-6 py-0.5 text-sm",
        sm: "px-6 py-1.5 text-sm",
        md: "px-8 py-2 text-base",
        lg: "px-10 py-3 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      loading: {
        true: "opacity-70 cursor-wait",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      loading: false,
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  fullWidth,
  loading = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, fullWidth, loading }),
        className
      )}
      disabled={loading as boolean}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
