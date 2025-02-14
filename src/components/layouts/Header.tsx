"use client"

import React, { useContext } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { ColorContext } from "../context";

const Header = () => {

  const colorContext = useContext(ColorContext)

  if(!colorContext) {
    throw new Error("ColorContext is null")
  }
  const {lineColor} = colorContext

  return (
    <header className={`bg-primary-blue text-white hidden sm:block ${lineColor} border-b-2 px-4 lg:px-0`}>
      <div className="py-1.5 px-2 pl-10 lg:pl-[4.5rem] flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-3">
          <i>
            <Image
              src="/icons/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
          </i>
          <i>
            <Image
              src="/icons/twitter.png"
              alt="twitter"
              width={16}
              height={16}
            />
          </i>
          <i>
            <Image
              src="/icons/facebook.png"
              alt="facebook"
              width={16}
              height={16}
            />
          </i>

          <i>
            <Image
              src="/icons/linkedin.png"
              alt="linkedin"
              width={16}
              height={16}
            />
          </i>
        </div>

        {/* Middle Section: Contact Information */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2 text-sm">
            <i>
            <Image
              src="/icons/w-telephone.png"
              alt="telephone"
              width={16}
              height={16}
            />
          </i>
            <span>1300772824</span>
          </span>
          <span className="flex items-center space-x-2 text-sm">
          <i>
            <Image
              src="/icons/w-mail.png"
              alt="mail"
              width={16}
              height={16}
            />
          </i>
            <span>Contact The Expert</span>
          </span>
        </div>

        {/* Right Section: Search Box & Login */}
        <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border border-white text-white text-sm px-3 pr-10 py-0.5 rounded-md w-40 focus:outline-none"
          />
          <Image
            src="/icons/search.png"
            alt="search"
            width={12}
            height={12}
            className="absolute right-3"
          />
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-gray-500 h-6"></div>

        {/* Login Button */}
        <Button variant="secondary" size="xsm" className="text-white">
          Login
        </Button>
      </div>
      </div>
    </header>
  );
};

export default Header;
