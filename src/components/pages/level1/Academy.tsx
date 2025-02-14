"use client";

import React, { useContext, useEffect } from "react";
import LevelOnePageBuilder, { LevelOnePage } from "./Index";
import Typography from "@/components/ui/Typography";
import icons from "@/components/utils/Icons";
import { ColorContext } from "@/components/context";

// Example usage:
const academyPageData: LevelOnePage = {
  pageColor: {
    primaryText: "text-yellow-bright",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-yellow-bright to-gradiant-security-start",
    primaryBackground: "bg-yellow-bright",
    primaryBorder: "border-yellow-bright",
    primaryShadow: "primary-shadow5",
    HprimaryBackground: "hover:bg-yellow-bright",
    AprimaryBackground: "active:bg-yellow-bright",
    // barColor: "bg-gradient-to-r from-white to-yellow-bright",
  },

  coverSection: {
    pageTitle: "Grow Your Knowledge Grow Your Value",
    pageDescription:
      "Katalyst managed services are designed to help you run your business more efficiently, proactively while rationalising the cost of operations.",
    coverImage: "/services/academy/academy-hero.png",
    coverImageAlt: "Academy Services",
    coverIcon: "/services/academy/KCS Academy.png",
    coverList: [
      {
        title: "Quality",
        url: "/academy/quality",
      },
      {
        title: "Business",
        url: "/academy/business",
      },
      {
        title: "Technology",
        url: "/academy/technology",
      },
      {
        title: "Security",
        url: "/academy/security",
      },
    ],
  },
  midSection: {
    title:
      "Our programs are all about choice— design the mix of in-person, online, or video training that works best for you. Then validate your skills with our industry-recognized certification programs.",
    description:
      "Fusce scelerisque odio nec ultrices feugiat. Quisque luctus tincidunt sodales. Donec metus nisi, congue eget velit nec, auctor porta lectus.Included in this course Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec suscipit nulla, eget rhoncus erat. Curabitur quis ultricies justo. Integer feugiat augue augue, quis laoreet mi molestie sed. Donec condimentum risus et facilisis aliquet. Quisque aliquet sollicitudin magna a ullamcorper.",
    image: "/services/academy/academy-about.png",
    imageAlt: "Academy Services",

    li: [
      "Comprehensive IT security lifecycle services",
      "Technology-driven, scalable and highly automated",
    ],
  },
  SectionTabs: {
    "SIX SIGMA": {
      title: "SIX SIGMA",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Our Infrastructure services manages your IT environment and IT echo
            systems, encompassing, servers, workstations, applications,
            databases, websites, networks and mobile devices. Everything put
            together can get technically challenging for business to manage on
            their own, Under or inefficient utilisations of your IT assets
            impacts your business adversely and imposes a significant cost.
          </p>
          <p className="text-white leading-7">
            Our services not only help you in managing and maintaining your IT
            assets. More importantly, we work with you to exploit them optimally
            and maximising business profits through productive utilisation of
            each and every available IT asset. We make sure your data is secure
            and robust measures are in place to recover data in case of any
            eventuality or accident. Taking as step further we also design
            solutions so your business continues operating under all
            circumstances.
          </p>
        </div>
      ),
    },
    "DATA-SCIENCE": {
      title: "DATA SCIENCE",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Our Enterprise application support is offered in four different
            slabs, you can choose what best suites your requirements. If you
            have some unique support requirements, you can reach out to our team
            and we would be able to help with that.
          </p>
          <p className="text-white leading-7">
            Our IBS offers ad hoc support on incident basis, other end of the
            spectrum is our KCS Total Care where we manage the complete
            environment for you as and integral and extended part of your team.
            protect critical information and effectively reduce the cost and
            complexity of your security infrastructure. With various options
            from KCS EA practice, to manage business application services.
            Customers get a wide range of options that help business make a
            choice on available budget and resources.
          </p>
        </div>
      ),
    },
    "SYSTEM-ADMINISTRATION": {
      title: "SYSTEM ADMINISTRATION",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Training employees to recognize and respond to security threats
            requires much more than a technology solution. It requires a program
            that actually changes human behaviours across the organization. KCS
            academy delivers the framework, roadmap and skills needed to
            develop, maintain and measure a security-driven business culture.
            Through hands-on instruction, interactive labs and exercises.
          </p>
        </div>
      ),
    },
    "CYBER-SECURITY": {
      title: "CYBER SECURITY",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Digitalisation is at the core of our service portfolio. We can
            manage the complete digital lifecycle for your business. Our digital
            services help you lowering operating cost, improve productivity and
            become proactive. Our digital service help you reach and explore new
            market segments through social and digital marketing. Our digital
            services help create new customer acquisition channels, improves
            working conditions and employee retention. It also improves
            decision-making through greater visibility of business information.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Intranet
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Websites
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Animation and marketing
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Mobile and app development
              </Typography>
            </li>
          </ul>
        </div>
      ),
    },
  },
  // cardSection: [
  //   {
  //     title: "SIX SIGMA",
  //     heading: "",
  //     description:
  //       "Our Infrastructure services manages your IT environment and IT echo systems, encompassing, servers, workstations, applications, databases, websites, networks and mobile devices. Everything put together can get technically challenging for business to manage on their own, Under or inefficient utilisations of your IT assets impacts your business adversely and imposes a significant cost.",
  //     description1:
  //       "Our services not only help you in managing and maintaining your IT assets. More importantly, we work with you to exploit them optimally and maximising business profits through productive utilisation of each and every available IT asset. We make sure your data is secure and robust measures are in place to recover data in case of any eventuality or accident. Taking as step further we also design solutions so your business continues operating under all circumstances.",
  //   },
  //   {
  //     title: "DATA SCIENCE",
  //     heading: "",
  //     description:
  //       "Our Enterprise application support is offered in four different slabs, you can choose what best suites your requirements. If you have some unique support requirements, you can reach out to our team and we would be able to help with that.",
  //     description1:
  //       "Our IBS offers ad hoc support on incident basis, other end of the spectrum is our KCS Total Care where we manage the complete environment for you as and integral and extended part of your team. protect critical information and effectively reduce the cost and complexity of your security infrastructure. With various options from KCS EA practice, to manage business application services. Customers get a wide range of options that help business make a choice on available budget and resources.",
  //   },
  //   {
  //     title: "SYSTEM ADMINISTRATION",
  //     heading: "",
  //     description:
  //       "Training employees to recognize and respond to security threats requires much more than a technology solution. It requires a program that actually changes human behaviours across the organization.",
  //     description1:
  //       "KCS academy delivers the framework, roadmap and skills needed to develop, maintain and measure a security-driven business culture. Through hands-on instruction, interactive labs and exercises.",
  //   },
  //   {
  //     title: "CYBER SECURITY",
  //     heading: "",
  //     description:
  //       "Digitalisation is at the core of our service portfolio. We can manage the complete digital lifecycle for your business. Our digital services help you lowering operating cost, improve productivity and become proactive. Our digital service help you reach and explore new market segments through social and digital marketing. Our digital services help create new customer acquisition channels, improves working conditions and employee retention. It also improves decision-making through greater visibility of business information.",
  //     description1: "",
  //     li: [
  //       "Intranet",
  //       "Websites",
  //       "Animation and marketing",
  //       "Mobile and app development",
  //     ],
  //   },
  // ],

  enterpriseServices: {
    title: "",
    leftServices: [
      { id: 1, name: "" },
      { id: 2, name: "" },
      { id: 3, name: "" },
      { id: 4, name: "" },
      { id: 5, name: "" },
      { id: 6, name: "" },
    ],

    rightServices: [
      { id: 7, name: "" },
      { id: 8, name: "" },
      { id: 9, name: "" },
      { id: 10, name: "" },
      { id: 11, name: "" },
      { id: 12, name: "" },
    ],
    barColor: "bg-gradient-to-r from-blue-light to-gradiant-security-start",
  },

  engagement: {
    steps: [
      {
        number: "01",
        title: "INSTRUCTER LED TRAINING",
        description:
          "In-person or live, virtual training options are available at your preference. Equipped with hands-on labs and detailed instruction, expert Nutanix instructors create an environment to help you learn.",
        icon: icons.InstructerLedTraining,
      },
      {
        number: "02",
        title: "FACILITATED LABS",
        description:
          "Get hands-on experience in a safe, real-world environment through virtual Facilitated Labs.",
        icon: icons.FacilitatedLabs,
      },
      {
        number: "03",
        title: "SELF PACED ONLINE TRAINING",
        description:
          "These short courses, videos, and product demos give you the knowledge you need, when you need it.",
        icon: icons.SelfPacedOnlineTraining,
      },
      {
        number: "04",
        title: "PRIVATE TRAINING",
        description:
          "Virtual or in-person training with the convenience and comfort of your own location, ensuring consistent education across your full team without the hassle of travel.",
        icon: icons.PrivateTraining,
      },
    ],
  },
  iconSection: {
    coverList: [
      {
        url: "",
        coverImage: "",
        coverImageAlt: "",
      },
      {
        url: "",
        coverImage: "",
        coverImageAlt: "",
      },
      {
        url: "",
        coverImage: "",
        coverImageAlt: "",
      },
      {
        url: "",
        coverImage: "",
        coverImageAlt: "",
      },
    ],
  },
};

// Then use it like:

const Academy = () => {
  const colorContext = useContext(ColorContext);
  if (!colorContext) {
    throw new Error("ColorContext is null");
  }
  const { setLineColor } = colorContext;

  useEffect(() => {
    setLineColor(academyPageData.pageColor.primaryBorder);
  }, [setLineColor]);
  return <LevelOnePageBuilder pageData={academyPageData} />;
};

export default Academy;
