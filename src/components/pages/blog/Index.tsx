"use client";

import React, { useState } from "react";
import Image from "next/image";
// import { FaSearch } from "react-icons/fa";
// import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Typography from "@/components/ui/Typography";
import Pagination from "./Pagination";
// import OurProduct from "../homepage/Index-slider and our product";
// import icons from "@/components/utils/Icons";
import OurPartner2 from "../../ui/OurPartner2";
import ContactUs from "../homepage/ContactUs";
import "./style.css";

const blogs = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  // {
  //   id: 1,
  //   category: "HOSPITALITY",
  //   image: "/assets/img/vtiger-blog/micros/simphony-micros-hero-img.webp",
  //   title: "MICROS TO SYMPHONY INVENTORY MANAGEMENT",
  //   authorImage: "/assets/img/mruser.webp",
  //   author: "Tuhin Chakraborty",
  //   date: "February 03, 2024",
  //   link: "#",
  // },
  // {
  //   id: 2,
  //   category: "CRM",
  //   image: "/assets/img/vtiger-blog/AB-Testing/AB-testing-hero.png",
  //   title: "A/B TESTING: AN OVERVIEW",
  //   authorImage: "/assets/img/msuser.webp",
  //   author: "Prithwisha Panja",
  //   date: "September 09, 2023",
  //   link: "#",
  // },
  // {
  //   id: 3,
  //   category: "CYBER SECURITY",
  //   image:
  //     "/assets/img/cyber-security-blog/application-patching/essential-8-hero-img.png",
  //   title: "ESSENTIAL EIGHT: APPLICATION PATCHING",
  //   authorImage: "/assets/img/mruser.webp",
  //   author: "Dipankar Chakraborty",
  //   date: "September 16, 2023",
  //   link: "#",
  // },
  // Add more courses as needed
].map((blog, idx) => {
  return {
    id: `${idx + 1}`,
    category: idx < 6 ? "HOSPITALITY" : idx < 12 ? "CRM" : "CYBER SECURITY",
    image: "/images/blog/blog-post-2.png",
    backgroundImage: "/images/blog/background-placeholder-2.png",
    title: "Importance of Cyber Security Essential 8 for Businesses PART 2",
    authorImage: "/images/blog/author-placeholder-2.png",
    author: "Dipankar Chakravarty",
    date: "June 08, 2023",
    link: "#",
  };
});

const Blog = () => {
  const itemsPerPage = 3;
  const categories = ["ALL", "HOSPITALITY", "CRM", "CYBER SECURITY"];
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs =
    activeCategory === "ALL"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* Hero Section */}
      <section className="mt-5 md:mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center py-6 lg:py-20 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8">
        <div className="md:col-span-7 flex flex-col justify-center items-start text-center md:text-left">
          <Typography
            color="text-primary-orange"
            as="h2"
            className="text-2xl md:text-4xl leading-7 md:leading-[25px] lg:leading-10 font-bold"
          >
            KCS BLOG
          </Typography>
          <Typography
            color="text-gray-700"
            as="p"
            className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl leading-6 md:leading-10 font-bold"
          >
            &ldquo;Welcome to our blog, where we share insightful articles and
            exciting updates on a wide range of topics!&rdquo;
          </Typography>
        </div>
        <div className="md:col-span-5 flex justify-center items-center">
          <Image
            src={"/images/blog/Blog 1.png"}
            alt={"faq"}
            width={560}
            height={260}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Blog Post Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog Post Card Component */}
          {/* <div className="bg-white shadow-xl shadow-gray-600/50 rounded-lg p-6 flex flex-col"> */}
          <section className="bg-white custom-shadow rounded-lg p-6 flex flex-col">
            <a href="#" className="block">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                {/* <div className="relative w-full h-64"> */}
                {/* <Image
                src="/images/blog/background-placeholder.png"
                alt="Background"
                fill
                className="absolute inset-0 object-cover rounded-lg"
                /> */}

                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/blog/background-placeholder.png')",
                  }}
                ></div>

                {/* Foreground Blog Post Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/blog/blog-post.png"
                    alt="Blog Post"
                    width={400}
                    height={200}
                    className="relative z-10 rounded-lg"
                  />
                </div>
              </div>
              <Typography
                as="h3"
                className="mt-4 md:mt-20 lg:mt-4 font-bold text-lg blog-card-heading"
              >
                Importance of Cyber Security Essential 8 for Businesses PART 2
              </Typography>
            </a>
            <Typography as="p" className="mt-2 text-sm blog-card-text">
              Tag: Cyber Security, Essential 8, Data Protection, Application
              Whitelisting, Shadow IT.
            </Typography>
            <div className="mt-4 md:mt-12 lg:mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <Image
                  src="/images/blog/author-placeholder.png"
                  alt="Author"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <Typography as="p" className="font-semibold author">
                    By Dipankar Chakravarty
                  </Typography>
                  <Typography as="p" className="text-sm text-gray-500">
                    June 08, 2023
                  </Typography>
                </div>
              </div>
              {/* <a
                href="#"
                className="w-fit bg-white text-primary-orange font-bold py-1 px-4 mt-6 ml-[35vw] md:mt-0 md:ml-0 md:mr-6 rounded-full border border-primary-orange hover:bg-primary-orange hover:text-white transition-colors read-more"
              >
                READ MORE
              </a> */}
              <a href="#" className="block">
                <button className="w-fit bg-white text-primary-orange font-bold py-1 px-4 mt-6 ml-[35vw] md:mt-0 md:ml-0 md:mr-6 rounded-full border border-primary-orange hover:bg-primary-orange hover:text-white transition-colors">
                  READ MORE
                </button>
              </a>
            </div>
          </section>

          {/* Sidebar Components */}
          <div className="space-y-6">
            {/* Search Component */}
            <section className="bg-white border border-gray-300 rounded-lg p-4">
              <Typography
                as="h4"
                className="font-bold text-lg text-gray-800 mb-2"
              >
                Search the blog
              </Typography>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full pb-2 border-b border-gray-300 focus:outline-none focus:border-primary-orange"
                />
                <div className="absolute right-0 top-0 h-full flex items-center pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </section>

            {/* Categories Component */}
            <section className="bg-white border border-gray-300 rounded-lg p-4">
              <Typography
                as="h4"
                className="font-bold text-lg text-primary-orange mb-2"
              >
                Categories
              </Typography>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Hospitality",
                  "Cyber Security",
                  "CRM",
                  "Manufacturing",
                  "Operation",
                  "Managed Services",
                ].map((category, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 rounded-full categories"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </section>

            {/* Tags Component */}
            <section className="bg-white border border-gray-300 rounded-lg p-4">
              <Typography
                as="h4"
                className="font-bold text-lg text-primary-orange mb-2"
              >
                TAGS
              </Typography>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Business",
                  "Market Analysis",
                  "Consultancy",
                  "Marketing",
                  "Finance",
                  "Revenue",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 rounded-full tags"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Social Media Component */}
            <section className="flex bg-white p-4">
              <Typography as="h4" className="font-bold text-lg mb-2 mr-4">
                SHARE:
              </Typography>
              <div className="flex space-x-4 gap-2">
                {[
                  { platform: "linkedin", link: "#" },
                  { platform: "twitter", link: "#" },
                  { platform: "instagram", link: "#" },
                  { platform: "facebook", link: "#" },
                ].map((medias, idx) => (
                  <a key={idx} href={`${medias.link}`}>
                    <Image
                      src={`/icons/${medias.platform}-1.png`}
                      // src={`icons.${medias.platform}`}
                      // src={icons.Linkedin}
                      // src={`${icons}.${medias.platform}`}
                      // src={icons[medias.platform]}
                      alt={medias.platform}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="academy-our-courses pt-20 pb-20">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-wrap justify-center mb-6 gap-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-6 py-1 font-bold rounded-full border border-primary-orange ${
                  activeCategory === cat
                    ? "bg-primary-orange text-white"
                    : "bg-white text-primary-orange"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paginatedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white custom-shadow rounded-lg p-3 overflow-hidden shadow-sm"
              >
                <a href={blog.link} className="block">
                  <div className="relative w-full h-48">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${blog.backgroundImage})`,
                      }}
                    ></div>

                    {/* Foreground Blog Post Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <Typography
                    as="h4"
                    className=" mt-4 mb-2 font-bold text-lg text-gray-800 blog-card-heading"
                  >
                    {`${blog.title}`.slice(0, 45)}......
                  </Typography>
                </a>
                <div className="flex-col p-4 border-t border-gray-200">
                  {/* <a href={blog.link} className="hidden md:block"> */}
                  {/* <a href={blog.link} className="bg-primary-orange text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"> */}
                  <a href={blog.link} className="block">
                    <button className="w-fit bg-white text-primary-orange font-bold px-4 py-1 rounded-full border border-primary-orange hover:bg-primary-orange hover:text-white transition-colors">
                      READ MORE
                    </button>
                  </a>
                  <div className="flex items-center mt-4">
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <Typography as="p" className="font-medium author">
                        {blog.author}
                      </Typography>
                      <Typography as="p" className="text-xs text-gray-500">
                        {blog.date}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginated Articles */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>

      {/* Our Partner Section */}
      <OurPartner2 />

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default Blog;
