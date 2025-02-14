"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; // Import the custom CSS file
import CommonHeader from "@/components/ui/CommonHeader";

const NewsSection = () => {
  const newsItems = [
    {
      title: "Mastering Customer Insights:",
      description: "Discussing The Importance...",
      image: "/news/news1.png",
      date: "March 30, 2024",
      comments: "Comments",
    },
    {
      title: "Mastering Customer Insights:",
      description: "Discussing The Importance...",
      image: "/news/news2.png",
      date: "March 30, 2024",
      comments: "Comments",
    },
    {
      title: "Mastering Customer Insights:",
      description: "Discussing The Importance...",
      image: "/news/news3.png",
      date: "March 30, 2024",
      comments: "Comments",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Set auto-scroll speed (in milliseconds)

    responsive: [
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="global-margin global-padding">
      {/* Icon and Heading */}
      <div className="flex flex-col items-center justify-center">
        <CommonHeader color="text-primary-blue">NEWS</CommonHeader>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        <Slider {...sliderSettings}>
          {newsItems.map((news, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-2xl overflow-hidden transition duration-300 hover:shadow-lg">
                {/* News Image */}
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </div>
                {/* News Content */}
                <div className="p-4">
                  <div className="flex items-center text-[0.7rem] text-gray-500 mt-2">
                    {/* Custom Calendar Icon and Date */}
                    <img
                      src="/icons/calendar.png" // Replace with your calendar icon image path
                      alt="Calendar"
                      className="mr-2 w-4 h-4"
                    />
                    <span className="text-[0.7rem] text-[#6B7280]">
                      {news.date}
                    </span>{" "}
                    {/* Adjusted text color and size */}
                    <span className="mx-2 text-[#6B7280]">|</span>
                    {/* Custom Comments Icon and Count */}
                    <img
                      src="/icons/chat_bubble.png" // Replace with your comments icon image path
                      alt="Comments"
                      className="mr-2 w-4 h-4"
                    />
                    <span className="text-[0.7rem] text-[#6B7280]">
                      {news.comments}
                    </span>{""}
                    {/* Adjusted text color and size */}
                  </div>
                  <h3 className="text-lg font-bold text-[#11344E] mt-4">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mt-4 text-sm line-clamp-2">
                    {news.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsSection;
