"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "./Typography";
import CommonHeader from "./CommonHeader";

const OurPartner2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const partners = [
    { src: "/logos/microsoft.png", alt: "Microsoft Partner" },
    { src: "/logos/dicker.png", alt: "Dicker Data" },
    { src: "/logos/sonicwall.png", alt: "SonicWall" },
    { src: "/logos/equinix.png", alt: "Equinix" },
  ];

  return (
    <section className="mt-2">
      <CommonHeader color="text-primary-blue">OUR PARTNER</CommonHeader>
      <div className="mx-auto rounded-[20px] grid grid-cols-2 my-2">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-[20px]"
            >
              <div className="w-auto flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={80}
                  height={80}
                  className=" object-fill p-3"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex items-center justify-center">
          <Typography as={"p"}>
            Share in our success. Grow your business with the experiences
            industry leader. Our world-class ecosystem of tools.
          </Typography>
        </div>
      </div>
    </section>
  );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2"
    onClick={onClick}
  >
    <Image
      src="/icons/right-arrow.png"
      alt="Next Arrow"
      width={20}
      height={20}
    />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2"
    onClick={onClick}
  >
    <Image
      src="/icons/right-arrow.png"
      alt="Previous Arrow"
      width={20}
      height={20}
      className="transform rotate-180"
    />
  </button>
);

export default OurPartner2;
