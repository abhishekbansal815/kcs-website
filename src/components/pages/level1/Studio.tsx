"use client";

import React, { useContext, useEffect } from "react";
import LevelOnePageBuilder, { LevelOnePage } from "./Index";
import Typography from "@/components/ui/Typography";
import icons from "@/components/utils/Icons";
import { ColorContext } from "@/components/context";

// Example usage:
const studioPageData: LevelOnePage = {
  pageColor: {
    primaryText: "text-orange-bright",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-orange-bright to-gradiant-security-start",
    primaryBackground: "bg-orange-bright",
    primaryBorder: "border-orange-bright",
    primaryShadow: "primary-shadow6",
    HprimaryBackground: "hover:bg-orange-bright",
    AprimaryBackground: "active:bg-blue-bright",
    // barColor: "bg-gradient-to-r from-white to-orange-bright",
  },

  coverSection: {
    pageTitle: "HOSPITALITY SOLUTION",
    pageDescription:
      "Our hospitality solutions draws extensively on experience of our team which on average have more than 20 years of professional experience in various sectors of hospitality industry around the globe.",
    coverImage: "/services/managedservice/Managed Service hero.png",
    coverImageAlt: "KCS Studio",
    coverIcon: "/services/studio/KCS Studio.png",
    // coverList: ["Infrastructure", "Licensing", "Procurement", "Digital"],
    coverList: [
      {
        title: "Proptech",
        url: "/studio/proptech",
      },
      {
        title: "",
        url: "",
      },
      {
        title: "",
        url: "",
      },
      {
        title: "Alchimie",
        url: "studio/alchimie",
      },
    ],
  },
  midSection: {
    title:
      "Our hospitality solutions, branded as alchimie, are grounded in the extensive expertise of our team. Each member brings over 20 years of professional experience from various sectors of the global hospitality industry. This wealth of knowledge allows us to deliver comprehensive and innovative solutions tailored to meet the unique needs of our clients.",
    description:
      "alchimie stands out by leveraging the diverse backgrounds and insights of our team. Their combined experience ensures that our solutions are not only practical but also forward-thinking, addressing the evolving challenges of the hospitality industry worldwide. By choosing alchimie, clients benefit from.",
    image: "/services/managedservice/manageservice.png",
    imageAlt: "Hospitality Services",

    li: [
      "On-premise or cloud deployment",
      "Integrated business intelligence",
      "Integration with other solutions",
      "Quick deployment",
    ],
  },
  SectionTabs: {
    "Key features of POS Hotel System": {
      title: "Key features of POS Hotel System",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Responsive and lightweight POS to facilitate operational
            flexibility. Modern features, QR code ordering, Digital menu boards
            , Integrations with delivery apps Loyalty and Inventory control
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Reporting
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Customer Management
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Operation
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Integrations
              </Typography>
            </li>
          </ul>
        </div>
      ),
    },
    "Key Features of CRM": {
      title: "Key Features of CRM",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            CRM empowers you to align your marketing, sales and support teams
            with unified customer data.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Sales and Marketing
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Social Media Marketing
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                EDM
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Quality Management
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                LMS
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Contact Center
              </Typography>
            </li>
          </ul>
        </div>
      ),
    },
    "Key features of Finance Solution": {
      title: "Key features of Finance Solution",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            A single, affordable solution to manage your entire customer
            relationship business – from accounting and financials, purchasing,
            inventory, sales and customer relationships to reporting and
            analytics.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                AR/AP
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Fixed Assets
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Bank Reconciliation
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Maintenance
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Business Partners
              </Typography>
            </li>
            <li className="flex items-center justify-start gap-3">
              <span className="text-primary-orange">→</span>
              <Typography
                as="p"
                className="inline max-w-none text-white leading-7"
              >
                Supply Chain Management
              </Typography>
            </li>
          </ul>
        </div>
      ),
    },
    "Supply Chain Management": {
      title: "Supply Chain Management",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Instill resilient, connected, and sustainable SCM processes from
            design to operate Run with fully interdependent supply chain
            management solutions to stay resilient, agile, productive, and
            sustainable.
          </p>
        </div>
      ),
    },
  },
  // cardSection: [
  //   {
  //     title: "Key features of POS Hotel System",
  //     heading: "",
  //     description:
  //       "Responsive and lightweight POS to facilitate operational flexibility. Modern features, QR code ordering, Digital menu boards , Integrations with delivery apps Loyalty and Inventory control",
  //     description1: "Reporting, Customer Management, Operation, Integrations",
  //   },
  //   {
  //     title: "Key Features of CRM",
  //     heading: "",
  //     description:
  //       "CRM empowers you to align your marketing, sales and support teams with unified customer data.",
  //     description1:
  //       "Sales and Marketing, Social Media Marketing, EDM, Quality Management, LMS, Contact Center",
  //   },
  //   {
  //     title: "Key features of Finance Solution",
  //     heading: "",
  //     description:
  //       "A single, affordable solution to manage your entire customer relationship business – from accounting and financials, purchasing, inventory, sales and customer relationships to reporting and analytics.",
  //     description1:
  //       "AR/AP, Fixed Assets, Bank Reconciliation, Maintenance, Business Partners, Supply Chain Management",
  //   },
  //   {
  //     title: "Supply Chain Management",
  //     heading: "",
  //     description:
  //       "Instill resilient, connected, and sustainable SCM processes from design to operate Run with fully interdependent supply chain management solutions to stay resilient, agile, productive, and sustainable.",
  //     description1: "",
  //   },
  // ],

  enterpriseServices: {
    title:
      "Technology in hotels is contributing to the new paradigm of guest experience. Advancements in technology is helping the industry today to deliver the next generation customer services experience to its patrons.",
    leftServices: [
      { id: 1, name: "High- Level feature options" },
      { id: 2, name: "Central Reservation" },
      { id: 3, name: "Mobile App PWA" },
      { id: 4, name: "PMS" },
      { id: 5, name: "Private intranet" },
      { id: 6, name: "Integrations" },
    ],

    rightServices: [
      { id: 1, name: "" },
      { id: 8, name: "" },
      { id: 9, name: "" },
      { id: 10, name: "" },
      { id: 11, name: "" },
      { id: 12, name: "" },
    ],

    barColor: "bg-gradient-to-r from-orange-bright to-gradiant-security-start",
  },

  engagement: {
    steps: [
      {
        number: "01",
        title: "CONSOLIDATE",
        description:
          "Consolidate systems and applications to reduce operating expenses.",
        icon: icons.Consolidate,
      },
      {
        number: "02",
        title: "OPTIMIZE",
        description:
          "Tune and automate systems and applications to improve performance, scalability, and reliability.",
        icon: icons.Optimize,
      },
      {
        number: "03",
        title: "INNOVATE",
        description:
          "Deliver new applications and services rapidly to meet changing business needs.",
        icon: icons.Innovate,
      },
      {
        number: "04",
        title: "ACCELERATE",
        description:
          "Enable fast, secure, and integrated business environments.",
        icon: icons.Accelerate,
      },
    ],
  },
  iconSection: {
    coverList: [
      {
        url: "/managedservice/infrastructure",
        coverImage: "",
        coverImageAlt: "",
      },
      {
        url: "/managedservice/infrastructure",
        coverImage: "",
        coverImageAlt: "",
      },
      {
        url: "/managedservice/infrastructure",
        coverImage: "",
        coverImageAlt: "",
      },
      {
        url: "/managedservice/infrastructure",
        coverImage: "",
        coverImageAlt: "",
      },
    ],
  },
};

// Then use it like:

const Studio = () => {
  const colorContext = useContext(ColorContext);
  if (!colorContext) {
    throw new Error("ColorContext is null");
  }
  const { setLineColor } = colorContext;

  useEffect(() => {
    setLineColor(studioPageData.pageColor.primaryBorder);
  }, [setLineColor]);
  return <LevelOnePageBuilder pageData={studioPageData} />;
};

export default Studio;
