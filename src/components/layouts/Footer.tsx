"use client";

import React, { useContext, useState } from "react";
import "../../components/style.css";
import Image from "next/image";
import icons from "../utils/Icons";
import Typography from "../ui/Typography";
import { ColorContext } from "../context";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const colorContext = useContext(ColorContext);

  if (!colorContext) {
    throw new Error("ColorContext is null");
  }
  const { lineColor } = colorContext;

  const handleSubscribe = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!email) {
      alert("Email is required.");
      return;
    }
    console.log("Subscribed with email:", email);
  };

  // Reusable Component for Navigation Links
  const NavigationSection = ({
    title,
    links,
  }: {
    title: string;
    links: { label: string; href: string }[];
  }) => (
    <div className="lg:col-span-3 flex flex-col items-start justify-start p-6">
      <Typography as="h5" className="text-[#11344E] text-sm font-semibold mb-0">
        {title}
      </Typography>
      <div className="mb-5">
        <Image
          src={icons.Line}
          alt={`${title} Icon`}
          className="h-1 mx-auto"
          width={72}
          height={1}
        />
      </div>
      <ul className="text-sm text-[#666666] space-y-4 text-left">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-xs font-semibold hover:text-[#F38023] transition-colors duration-300"
            >
              <Typography as="p" className="footer-body">
                {link.label}
              </Typography>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Top Section */}
      <section className="bg-[#F5F5F5]">
        {/* <hr className={`w-full ${lineColor} border-1`} /> */}
        <hr className={`w-full ${lineColor} border-[1px]`} />
        <div className="flex flex-col items-center max-w-screen-xl mx-auto">
          {/* <div className="w-full flex flex-wrap items-center justify-between py-8"> */}
          <div className="w-full flex flex-wrap flex-col md:flex-row items-start md:items-center justify-start md:justify-between py-8">
            <div className="lg:col-span-6 text-primary-orange text-xs sm:text-sm lg:text-base font-semibold">
              <Typography as="h5">
                LATEST INDUSTRY INFORMATION{" "}
                <Typography as="h5" className="inline text-black">
                  |
                </Typography>{" "}
                PRODUCT INFORMATION{" "}
                <Typography as="h5" className="inline text-black">
                  |
                </Typography>{" "}
                NEWSLETTER
              </Typography>
            </div>
            {/* <div className="flex flex-wrap items-center gap-4 lg:gap-8"> */}
            <div className="mt-3 lg:mt-0 lg:col-span-4 w-1/4 lg:w-1/5 flex items-center">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
                className="w-full px-3 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange custom-placeholder"
              />
            </div>
            <div className="mt-3 lg:mt-0 lg:col-span-2 w-1/8 lg:w-1/10 flex items-center justify-center">
              <button
                onClick={handleSubscribe}
                className="w-full lg:w-auto px-4 py-2 bg-primary-orange text-[#11344E] text-xs sm:text-sm font-bold rounded-lg hover:bg-primary-orange transition duration-200"
              >
                SUBSCRIBE
              </button>
            </div>
            {/* </div> */}
          </div>
          <hr className="w-full border-[#95959550] mb-4" />

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-[5rem] px-10 text-center">
            <NavigationSection
              title="ABOUT KCS"
              links={[
                { label: "Our Story", href: "#link1" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contactus" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
              ]}
            />
            <NavigationSection
              title="INDUSTRIES"
              links={[
                { label: "Manufacturing", href: "#link6" },
                { label: "Hospitality", href: "#link7" },
                { label: "Construction", href: "#link8" },
                { label: "Distribution", href: "#link9" },
                { label: "Small Medium Businesses (SMB)", href: "#link10" },
              ]}
            />
            <NavigationSection
              title="SERVICES"
              links={[
                { label: "Security", href: "#link11" },
                { label: "Enterprise Application", href: "#link12" },
                { label: "Networks", href: "#link13" },
                { label: "Managed Services", href: "#link14" },
              ]}
            />
            <NavigationSection
              title="SUPPORT"
              links={[
                { label: "Knowledge", href: "#link15" },
                { label: "Support Services", href: "#link16" },
                { label: "Technical Documentation", href: "#link17" },
                { label: "Free Trials", href: "#link18" },
              ]}
            />
          </div>

          <hr className="w-full border-[#95959550] mt-6" />

          {/* Footer */}
          <div className="max-w-screen-xl mx-auto text-center mt-2">
            <p className="text-xs mb-2 text-[#666666] footer-body">
              © 2025 - All Rights Reserved by Katalyst Consulting Services
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
