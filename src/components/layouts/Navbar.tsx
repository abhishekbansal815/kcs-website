"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Typography from "../ui/Typography";

type NavLink = {
  title: string;
  url: string;
};

const NavLinks: NavLink[] = [
  {
    title: "Security",
    url: "/security",
  },
  {
    title: "ENTERPRISE APPLICATION",
    url: "/enterpriseapplication",
  },
  {
    title: "NETWORK",
    url: "/network",
  },
  {
    title: "MANAGED SERVICES",
    url: "/managedservice",
  },
  {
    title: "KCS ACADEMY",
    url: "/academy",
  },
  {
    title: "KCS STUDIO",
    url: "/studio",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full max-w-screen-xl mx-auto mt-4 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logos/Katalyst_Logo_White 2.png"
              alt="Katalyst_Logo_White"
              width={216}
              height={62}
              className="w-[154px] sm:w-[180px] lg:w-[216px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="sm:flex items-center gap-4 xl:gap-8 hidden">
          {NavLinks.map((link) => (
            <Typography as="li" variant="caption" key={link.title}>
              <Link className="uppercase font-medium" href={link.url}>
                {link.title}
              </Link>
            </Typography>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <Image
              src="/icons/Hamburger.png"
              alt="hamburger"
              width={33}
              height={33}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-20 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={toggleMenu}>
            <Image src="/icons/Close.png" alt="close" width={25} height={25} />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-4">
          {NavLinks.map((link) => (
            <li key={link.title} className="border-b">
              <Link
                href={link.url}
                className="uppercase text-gray-800 block py-2"
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
