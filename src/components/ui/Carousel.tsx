"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Typography from "./Typography";

// Helper function to escape RegExp special characters
function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * highlightText takes a text string and an array of substrings (highlights)
 * and returns a React node with each occurrence of a highlight wrapped in a span.
 */
function highlightText(text: string, highlights: string[]): React.ReactNode {
  if (!highlights || highlights.length === 0) return text;

  // Create a regex that matches any of the highlight strings, case-insensitive.
  const regex = new RegExp(`(${highlights.map(escapeRegExp).join("|")})`, "gi");
  // Split the text by the highlights (capturing the matched parts)
  const parts = text.split(regex);

  return parts.map((part, index) =>
    highlights.some((h) => part.toLowerCase() === h.toLowerCase()) ? (
      <p
        key={index}
        className="inline text-primary-orange text-base sm:text-lg"
      >
        {part}
      </p>
    ) : (
      part
    )
  );
}

const Carousel = () => {
  const slides = [
    {
      image: "/images/TOTAL_COST_OF_APPLICATION_OWNERSHIP.png",
      alt: "Total Cost of Application Ownership",
      heading: "TOTAL COST OF APPLICATION OWNERSHIP",
      caption:
        "As true technology cost is like an iceberg, wherein 85% of the cost is hidden.",
      captionHighlights: ["85%"],
      caption1: "We help in rationalizing the TECHNOLOGY COST.",
      caption1Highlights: ["TECHNOLOGY COST"],
    },
    {
      image: "/images/DIGITALISATION.png",
      alt: "Digitalisation",
      heading: "DIGITALISATION",
      caption:
        "We help business in Consulting, Development, Implementation, Integration, Training and Post- Sales Support. We offer end to end services. Our teams are ready to assist you with your SAP and ORACLE HOSPITALITY environments.",
      captionHighlights: ["SAP", "ORACLE HOSPITALITY"],
    },
    {
      image: "/images/DATA_NETWORK.png",
      alt: "Data Network",
      heading: "DATA NETWORK",
      caption:
        "DESIGN, CONFIGURATION, REMEDIATION and INFRASTRUCTURE we can assist with all your requirements.",
      captionHighlights: [
        "DESIGN, CONFIGURATION, REMEDIATION",
        "INFRASTRUCTURE",
      ],
      caption1:
        "We can optimize and strengthen your network to unleash potential of data-driven operations.",
      caption1Highlights: [],
    },
    {
      image: "/images/GDPR.png",
      alt: "Cyber Security",
      heading: "CYBER SECURITY",
      caption:
        "DISCOVERY, COMPLIANCE, GOVERNANCE and REMEDIATION our services cover the whole gamut. Our Information Security and Compliance services are tailored to fit your business size and operations.",
      captionHighlights: ["DISCOVERY, COMPLIANCE, GOVERNANCE", "REMEDIATION"],
    },
    {
      image: "/images/CUSTOMER_SUCCESS.png",
      alt: "Customer Success",
      heading: "CUSTOMER SUCCESS",
      caption:
        "We have selectively partnered with specific domain leaders in various technologies, so YOU GET THE HIGHEST LEVEL OF QUALITY OF SERVICE.",
      captionHighlights: ["YOU GET THE HIGHEST LEVEL OF QUALITY OF SERVICE"],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <section className="h-[auto] sm:h-[auto] lg:h-[432px] xl:h-[522px] bg-white">
      <div className="max-w-screen-xl mx-auto mb-6 lg:mb-9 py-[3rem] md:py-[4rem] lg:py-[4rem]">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slider-item flex-col md:flex-row lg:flex-row"
            >
              {/* Text section */}
              <div className="slider-text lg:text-left">
                <Typography
                  as="h1"
                  className="text-center text-primary-orange md:text-left lg:text-left font-bold"
                >
                  {slide.heading}
                </Typography>
                <p className="mt-4 text-base sm:text-lg text-gray-700">
                  {highlightText(slide.caption, slide.captionHighlights)}
                </p>
                {slide.caption1 && (
                  <p className="mt-2 text-base sm:text-lg text-gray-700">
                    {highlightText(slide.caption1, slide.caption1Highlights)}
                  </p>
                )}
              </div>
              {/* Image section */}
              <div className="slider-image">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
