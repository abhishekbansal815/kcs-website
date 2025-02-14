"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
// import CommonHeader from "@/components/ui/CommonHeader";
// import OurProduct from "../homepage/Index-slider and our product";
import Recruitment from "./Recruitment";
import icons from "@/components/utils/Icons";
import OurPartner2 from "../../ui/OurPartner2";
import ContactUs from "../homepage/ContactUs";
import "./style.css";

const Careers: React.FC = () => {
  const [workType, setWorkType] = useState("");
  const isRemoteOnly = workType === "remote";
  // const [isRemoteOnly, setIsRemoteOnly] = useState(false);

  const handleToggle = () => {
    setWorkType(isRemoteOnly ? "" : "remote");
    // setIsRemoteOnly(!isRemoteOnly);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWorkType(event.target.value);
    // setIsRemoteOnly(event.target.value === "remote");
  };

  const steps = [
    {
      number: "01",
      title: "CV SUBMISSION",
      description:
        "Register your interest in any of the advertised roles by submitting latest resume (not older than 3 months).",
      icon: icons.CVSubmission,
    },
    {
      number: "02",
      title: "PHONE SCREENING",
      description:
        "Our team would get in touch with you to conduct an initial screening and understand your objevtives.",
      icon: icons.PhoneScreening,
    },
    {
      number: "03",
      title: "SKILL ASSESSMENT",
      description:
        "Our team assess how best your skills (technical and behavioural) match the advertised role.",
      icon: icons.SkillAssessment,
    },
    {
      number: "04",
      title: "FINAL INTERVIEW",
      description:
        "To finalise your offer, hiring managers would conduct formal interviews for the shortlisted candidates and make an appropriate offer.",
      icon: icons.FinalInterview,
    },
  ];

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
            Join Our Team
          </Typography>
          <Typography
            color="text-gray-dark"
            as="h3"
            className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl leading-6 md:leading-10 font-medium"
          >
            Work at a young organisation, if you aspire to build a long-term
            career in Technology and Business
          </Typography>

          <Link href="#openings">
            <Button className="my-6 rounded-full bg-primary-orange text-primary-blue px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
              <Typography as="span" className="font-bold uppercase">
                VIEW OPENINGS
              </Typography>
            </Button>
          </Link>
        </div>
        <div className="md:col-span-5 flex justify-center items-center">
          <Image
            src={"/images/careers/team-Illustration.png"}
            alt={"faq"}
            width={560}
            height={260}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Life at Katalyst Section */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="relative flex justify-center">
              {/* Placeholder for Image */}
              <div className="bg-gray-300 w-[380px] md:w-[600px] h-[380px] md:h-[400px] flex items-center justify-center">
                {/* Replace with actual image */}
                {/* <Image
                  src="/images/team-illustration.svg"
                  alt="Team collaboration illustration"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                /> */}
                <p className="text-gray-500">Image Placeholder</p>
              </div>
            </div>

            {/* Right content */}
            <div className="space-y-6 text-center md:text-left">
              <Typography
                as="h2"
                className="text-2xl md:text-3xl font-bold text-[#E85C3F]"
              >
                Your Life At Katalyst
              </Typography>

              <Typography as="p" className="text-gray-600 text-sm md:text-base">
                A vibrant and energetic environment. A work space which is
                guided by creativity and innovation. You would be collaborating
                and bonding with other team members to develop solutions for our
                customers. Your work ethics, dedication and professionalism
                would help the organization build a strong company culture,
                which is critical to the success of our business.
              </Typography>
              <Typography as="p" className="text-gray-600 text-sm md:text-base">
                You would be part of a company with strong value system around
                innovation, customer success and frugality. Our value system
                drives creativity and &ldquo;thinking outside of the box&rdquo; culture in
                our team to achieve innovation.
              </Typography>
              <Typography as="p" className="text-gray-600 text-sm md:text-base">
                We encourage active collaboration and knowledge sharing between
                team members. We inspire and encourage our employees to explore
                their full potential thus ensuring our customers success.
              </Typography>
              <Typography as="p" className="text-gray-600 text-sm md:text-base">
                At the same time, we uphold the highest level of professionalism
                to ensure we deliver cost-effective solutions to our customers.
                Frugality is the cornerstone of our approach as we are mindful
                of providing maximum value to our customers through services.
              </Typography>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "/icons/coworkers.png",
                title: "Great co-workers",
                description:
                  "At KCS we take pride in what we do. We believe in team work and collaboration. We share our knowledge across functional teams to help everyone gain deeper and more holistic experience in their field of choice.",
              },
              {
                icon: "/icons/home-facility.png",
                title: "Work from home facility",
                description:
                  "We not only offer work from home facility. We also offer flexible schedules to help our team become more productive and build a better work-life balance.",
              },
              {
                icon: "/icons/learning.png",
                title: "Learning opportunity",
                description:
                  "At KCS we encourage continuous learning and offer a lot of opportunities for personal and professional growth which caters to all kinds of needs and interests in the technology domain. Learning is part of everyday work.",
              },
              {
                icon: "/icons/technology.png",
                title: "Cutting Edge Technology",
                description:
                  "We believe in staying ahead of the technology curve, so we invest our time and energy in new technological devices, techniques, and platforms.",
              },
              {
                icon: "/icons/global-projects.png",
                title: "Global Projects",
                description:
                  "We work across geographies, so our teams, no matter where they are based, get an opportunity to work on international projects. The team gets to diversify their experience while working on dynamic international projects.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={30}
                  height={30}
                  className="mt-12"
                />
                <div>
                  <h3 className="font-bold text-gray-600 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="bg-primary-orange py-8 md:py-16 m-12 rounded-3xl">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Typography
            as="h2"
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            Join us to be part of a
          </Typography>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Team Members" },
              { number: "25+", label: "Total Products" },
              { number: "3+", label: "Geography" },
              { number: "100+", label: "Learning Opportunities" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-lg flex flex-col items-center justify-center"
              >
                <Typography
                  as="h3"
                  className="text-4xl md:text-5xl font-bold text-white"
                >
                  {item.number}
                </Typography>
                <Typography
                  as="p"
                  className="mt-2 text-sm uppercase text-white"
                >
                  {item.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <Recruitment steps={steps} />

      {/* Job Openings Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Card Subsection*/}
          <section className="bg-primary-orange py-8 md:py-16 m-12 rounded-3xl">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header Row */}
              <div className="flex flex-col items-center justify-between">
                <div className="flex w-full justify-between mb-8" id="openings">
                  <Typography
                    as="h3"
                    className="text-2xl text-white mb-2 md:mb-0"
                  >
                    Job Openings
                  </Typography>
                  <Typography as="p" className="text-white text-lg font-bold">
                    10 Jobs Available
                  </Typography>
                </div>
                <div className="mt-0 md:mt-2 w-full">
                  <div className="relative flex items-center">
                    <i className="absolute left-3 text-primary-orange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    </i>
                    <input
                      type="search"
                      name="jobSearch"
                      id="jobSearch"
                      placeholder="Search jobs..."
                      spellCheck="false"
                      className="w-full pl-10 border border-gray-300 py-2 pr-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange search-jobs"
                    />
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select className="w-1/2 sm:w-full border border-gray-300 py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange select-location">
                  <option value="location">Location</option>
                  <option value="CA">CA, United States</option>
                  <option value="AU">Australia</option>
                  <option value="IN">India</option>
                  <option value="GL">Global</option>
                </select>
                <select className="w-1/2 sm:w-full border border-gray-300 py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange select-department">
                  <option value="department">Department</option>
                  <option value="pos">Research Analyst POS</option>
                  <option value="pms">Research Analyst PMS</option>
                  <option value="cyber-security">
                    Research Analyst Cyber Security
                  </option>
                  <option value="it-infrastructure">
                    Research Analyst IT Infrastructure
                  </option>
                  <option value="cloud">Research Analyst Cloud</option>
                  <option value="bdm-hospitality">BDM Hospitality</option>
                  <option value="bdm-cyber-security">BDM Cyber Security</option>
                  <option value="crm-functional-consultant">
                    CRM Functional Consultant
                  </option>
                  <option value="front-end-developer">
                    Front End Developer
                  </option>
                </select>
                <div className="flex items-center space-x-2">
                  <select
                    className="w-1/2 sm:w-full border border-gray-300 py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange select-work-type"
                    value={workType}
                    onChange={handleSelectChange}
                  >
                    <option value="">Work Type</option>
                    <option value="remote">Remote</option>
                    <option value="office">Work from Office</option>
                    <option value="part-time">Part-time</option>
                  </select>
                  <div
                    onClick={handleToggle}
                    className={`bg-white w-12 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                        isRemoteOnly
                          ? "translate-x-3 bg-black"
                          : "bg-primary-orange"
                      }`}
                    ></div>
                  </div>
                  <label
                    htmlFor="remoteWorkToggle"
                    className="text-sm text-white"
                  >
                    REMOTE ONLY
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Job Cards Subsection */}
          <section className="py-8 md:py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Research Analyst POS",
                  service: "EleHirely",
                  employment: "Full-time or Contract",
                  applyLink: "#",
                },
                {
                  title: "Account and Admin Officer",
                  service: "KCS Managed Services",
                  employment: "Full-time",
                  applyLink: "#",
                },
                {
                  title: "Graphic Designer",
                  service: "KCS Managed Services",
                  employment: "Full-time",
                  applyLink: "#",
                },
                {
                  title: "Full Stack Developer",
                  service: "KCS EA",
                  employment: "Full-time",
                  applyLink: "#",
                },
                {
                  title: "Social Media Consultant",
                  service: "KCS Managed Services",
                  employment: "Full-time or Contract",
                  applyLink: "#",
                },
                {
                  title: "Network Engineer/Cyber security",
                  service: "KCS Managed Services/CyberSecurity",
                  employment: "Full-time or Contract or Internship",
                  applyLink: "#",
                },
                {
                  title: "Sales and Marketing",
                  service: "KCS Managed Services",
                  employment: "Full-time or Contract or Internship",
                  applyLink: "#",
                },
                {
                  title: "Data Entry",
                  service: "KCS Managed Services",
                  employment: "Internship",
                  applyLink: "#",
                },
                {
                  title: "BDM",
                  service: "KCS Hospitality",
                  employment: "Full-time or Contract",
                  applyLink: "#",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  // className="bg-white border-gray-200 rounded-lg shadow p-6 flex flex-col justify-between"
                  className="bg-white custom-shadow rounded-lg p-6 flex flex-col justify-between"
                >
                  <Typography
                    as="h4"
                    className="text-xl font-bold text-gray-800"
                  >
                    {job.title}
                  </Typography>
                  <Typography as="p" className="mt-2 text-sm">
                    <span className="text-primary-orange font-bold">
                      {job.service}
                    </span>{" "}
                    | {job.employment}
                  </Typography>
                  <a
                    href={job.applyLink}
                    className="mt-6 mb-10 w-fit bg-primary-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 hover:text-black hover:border hover:border-orange-700 transition-colors"
                  >
                    APPLY NOW
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Our Partner Section */}
      <OurPartner2 />

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default Careers;
