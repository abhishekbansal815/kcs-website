"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const partners = [
  { src: "/logos/microsoft.png", alt: "Microsoft Partner" },
  { src: "/logos/dicker.png", alt: "Dicker Data" },
  { src: "/logos/sonicwall.png", alt: "SonicWall" },
  { src: "/logos/equinix.png", alt: "Equinix" },
];

const PartnerCarouselCustom = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      const isTablet = window.matchMedia("(min-width: 640px) and (max-width: 767px)").matches;

      if (isMobile) {
        setItemsToShow(1);
      } else if (isTablet) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
      setCurrentIndex(0);
    };
    
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const totalSlides = Math.ceil(partners.length / itemsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const start = currentIndex * itemsToShow;
  const visibleItems = partners.slice(start, start + itemsToShow);

  return (
    <div className="global-margin global-padding bg-[#F6F6F6] rounded-[20px] md:max-w-[820px] mx-auto">
      <div className="flex items-center justify-between">
        {itemsToShow < 4 && (
          <button
            onClick={handlePrev}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}
        <div
          className={`flex flex-1 ${
            itemsToShow === 2 ? "justify-center" : itemsToShow > 1 ? "justify-between" : "justify-center"
          } gap-4 md:gap-6 px-4`}
        >
          {visibleItems.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-[20px] flex-1 max-w-[160px] md:max-w-[180px]"
            >
              <div className="h-[104px] flex items-center justify-center w-full">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={90}
                  height={80}
                  className="object-contain w-full h-full p-3"
                />
              </div>
            </div>
          ))}
        </div>
        {itemsToShow < 4 && (
          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
      {itemsToShow < 4 && (
        <div className="flex justify-center mt-4 pb-4 space-x-2">
          {Array.from({ length: totalSlides }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === idx ? "bg-primary-orange" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PartnerCarouselCustom;