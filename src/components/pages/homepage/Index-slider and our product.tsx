"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonHeader from "@/components/ui/CommonHeader";
import icons from "@/components/utils/Icons";
import Typography from "@/components/ui/Typography";

interface Card {
  title: string;
  description: string;
  icon: string;
  alt: string;
  link: string;
}

const OurProduct: React.FC = () => {
  const cards: Card[] = [
    {
      title: "CRM",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      icon: icons.CRM,
      alt: "CRM Icon",
      link: "/products/crm",
    },
    {
      title: "ERP",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      icon: icons.ERP,
      alt: "ERP Icon",
      link: "/products/erp",
    },
    {
      title: "HOSPITALITY",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      icon: icons.Hospitality,
      alt: "Hospitality Icon",
      link: "/products/hospitality",
    },
  ];

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 cards on mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "10px",
    margin: 20, // Adds margin between slides

    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 2, // Show 2 cards on mobile
          slidesToScroll: 1,
          centerPadding: "10px",
          // Adding a gap between slides
          cssEase: "ease-in-out", // Adding transition effect
          centerMode: true, // Keeps a bit of the next slide visible
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col items-center justify-center global-margin global-padding">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <CommonHeader color="text-primary-blue">OUR PRODUCTS</CommonHeader>
      </div>

      {/* Cards Section */}
      <div className="max-w-screen-xl w-full">
        {/* Mobile Slider */}
        <div className="block sm:hidden">
          <Slider {...sliderSettings}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="!w-[12rem] bg-white shadow-md rounded-2xl overflow-hidden transition duration-300 hover:shadow-lg py-6 px-6 mx-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-100 rounded-full mx-auto">
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h4 className="text-primary-blue text-lg font-semibold text-left mb-2">
                  {card.title}
                </h4>
                {/* Description */}
                <p className="text-gray-600 footer-body text-left mb-4">
                  {card.description}
                </p>
                {/* Read More */}
                <div className="flex justify-start mt-4">
                  <a
                    href={card.link}
                    className="text-primary-blue text-sm underline hover:text-primary-orange"
                  >
                    <Typography as="span" className="read-more-button">
                      READ MORE
                    </Typography>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid for Tablet and Desktop */}
        <div className="hidden sm:grid grid-cols-3 gap-12 lg:gap-[5rem] px-16 lg:px-[9rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300 px-6"
            >
              {/* Icon */}
              <div className="bg-gray-100 w-16 h-16 mb-8 lg:mb-12 flex items-center justify-center rounded-full mx-auto">
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              {/* Title */}
              <Typography
                as="h4"
                color="text-primary-blue"
                className="text-left mb-2"
              >
                {card.title}
              </Typography>
              {/* Description */}
              <Typography
                as="p"
                variant="caption"
                className="footer-body text-left mb-4 lg:mb-8"
              >
                {card.description}
              </Typography>
              {/* Read More */}
              <a
                href={card.link}
                className="text-primary-blue text-sm underline hover:text-primary-orange text-left font-semibold"
              >
                <Typography as="span" className="read-more-button">
                  READ MORE
                </Typography>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
