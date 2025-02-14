"use client";

import React, { useContext, useEffect } from "react";
import LevelOnePageBuilder, { LevelOnePage } from "./Index";
import icons from "@/components/utils/Icons";
import { ColorContext } from "@/components/context";

// Example usage:
const enterpriseapplicationPageData: LevelOnePage = {
  pageColor: {
    primaryText: "text-red-dark",
    primaryBackground: "bg-red-dark",
    primaryBorder: "border-red-dark",
    HprimaryBackground: "hover:bg-red-dark",
    AprimaryBackground: "active:bg-red-dark",
    primaryShadow: "primary-shadow2",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-red-dark to-red-light",
    // barColor: "bg-gradient-to-r from-white to-red-dark",
  },

  coverSection: {
    pageTitle: "OUR ENTERPRISE APPLICATION PRACTISE FOCUSES ON DIGITALISATION.",
    pageDescription:
      "We help you transform your products & services while helping you explore new revenue sources.",
    coverImage: "/services/enterpriseapplication/EA-hero.png",
    coverImageAlt: "IT Enterprise Application Services",
    coverIcon: "/services/enterpriseapplication/KCS EA.png",
    // coverList: ["Consulting", "Development", "Support", "Migration/Updates"],
    coverList: [
      {
        title: "Consulting",
        url: "/enterpriseapplication/consulting",
      },
      {
        title: "Development",
        url: "/enterpriseapplication/development",
      },
      {
        title: "Support",
        url: "/enterpriseapplication/support",
      },
      {
        title: "Migration/Updates",
        url: "/enterpriseapplication/migration",
      },
    ],
  },
  midSection: {
    title:
      "Enterprise application portfolio covers SAP and Oracle hospitality digital business services and cloud applications, which will help you, evolve your business with real time insights. Our EA services help bringing together people, processes, and products that make your business strategies come to life. Whether you decide to move to the cloud or make further investments in your on-premises assets. We make them the digital core of your business, you will get expert, professional and reliable services and support you need to succeed.",
    description:
      "Our portfolio includes following services for SAP, Oracle and Cloud applications.",
    image: "/services/enterpriseapplication/ea-thumb-1.png",
    imageAlt: "IT Enterprise Application Services",

    li: ["Consulting", "Development", "Cloud Services", "Support"],
    li1: [
      "Incident based support (IBS)",
      "Application support business hrs / extended hrs (Standard Care)",
      "Application management business hrs / extended hrs (Professional Care)",
      "Application managed services 24/7 (Total Care)",
    ],
  },
  SectionTabs: {
    CONSULTING: {
      title: "CONSULTING",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Our application consultants help organizations like yours. In
            adopting, managing and exploiting business applications for desired
            business outcomes. We help you align and integrate key requirements
            and business processes, to business objectives. So that, business
            can be managed in an agile manner.
          </p>
          <p className="text-white leading-7">
            Our teams offers functional and technical consulting from the
            strategic space to operational and tactical areas. Our Enterprise
            application consulting services covers domains, operations,
            technologies, and training requirements of our customers.
          </p>
        </div>
      ),
    },
    DEVELOPMENT: {
      title: "DEVELOPMENT",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Our approach is of continuous implementation, continuous
            integration, continuous development and continuous deployments. We
            believe in true agility, we believe in incremental and continuous
            improvements because the business and technology life cycle have
            shrunk.
          </p>
          <p className="text-white leading-7">
            The business environment needs nimbleness and agility, it also
            requires you to respond quickly and comprehensively. We work with
            our customers closely and intimately to build bespoke solutions,
            which are unique for different customers.
          </p>
        </div>
      ),
    },
    SUPPORT: {
      title: "SUPPORT",
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
            complexity of your security infrastructure.
          </p>
          <p className="text-white leading-7">
            With various options from KCS EA practice, to manage business
            application services. Customers get a wide range of options that
            help business make a choice on available budget and resources.
          </p>
        </div>
      ),
    },
    "MIGRATION-UPGRADES": {
      title: "MIGRATION / UPGRADES",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
            <div className=" space-y-4">
              <p className="text-white leading-7">
                Training employees to recognize and respond to security threats
                requires much more than a technology solution. It requires a
                program that actually changes human behaviours across the
                organization.
              </p>
              <p className="text-white leading-7">
                KCS academy delivers the framework, roadmap and skills needed to
                develop, maintain and measure a security-driven business
                culture. Through hands-on instruction, interactive labs and
                exercises.
              </p>
            </div>
          </p>
        </div>
      ),
    },
  },
  // cardSection: [
  //   {
  //     title: "CONSULTING",
  //     heading: "",
  //     description:
  //       "Our application consultants help organizations like yours. In adopting, managing and exploiting business applications for desired business outcomes. We help you align and integrate key requirements and business processes, to business objectives. So that, business can be managed in an agile manner.",
  //     description1:
  //       "Our teams offers functional and technical consulting from the strategic space to operational and tactical areas. Our Enterprise application consulting services covers domains, operations, technologies, and training requirements of our customers.",
  //   },
  //   {
  //     title: "DEVELOPMENT",
  //     heading: "",
  //     description:
  //       "Our approach is of continuous implementation, continuous integration, continuous development and continuous deployments. We believe in true agility, we believe in incremental and continuous improvements because the business and technology life cycle have shrunk.",
  //     description1:
  //       "The business environment needs nimbleness and agility, it also requires you to respond quickly and comprehensively. We work with our customers closely and intimately to build bespoke solutions, which are unique for different customers.",
  //   },
  //   {
  //     title: "SUPPORT",
  //     heading: "",
  //     description:
  //       "Our Enterprise application support is offered in four different slabs, you can choose what best suites your requirements. If you have some unique support requirements, you can reach out to our team and we would be able to help with that. Our IBS offers ad hoc support on incident basis, other end of the spectrum is our KCS Total Care where we manage the complete environment for you as and integral and extended part of your team. protect critical information and effectively reduce the cost and complexity of your security infrastructure.",
  //     description1:
  //       "With various options from KCS EA practice, to manage business application services. Customers get a wide range of options that help business make a choice on available budget and resources.",
  //   },
  //   {
  //     title: "MIGRATION/UPDATES",
  //     heading: "",
  //     description:
  //       "Training employees to recognize and respond to security threats requires much more than a technology solution. It requires a program that actually changes human behaviours across the organization.",
  //     description1:
  //       "KCS academy delivers the framework, roadmap and skills needed to develop, maintain and measure a security-driven business culture. Through hands-on instruction, interactive labs and exercises.",
  //   },
  // ],

  enterpriseServices: {
    title:
      "Our Enterprise Applications portfolio consist of SAP and Oracle Hospitality solutions. We offer following services",
    leftServices: [
      { id: 1, name: "Implementation" },
      { id: 2, name: "Major Upgrades" },
      { id: 3, name: "Application Development" },
      { id: 4, name: "Digitalisation" },
      { id: 5, name: "Functional Consulting" },
      { id: 6, name: "Data Visualisation" },
    ],

    rightServices: [
      { id: 7, name: "Minor Upgrades" },
      { id: 8, name: "Integrations" },
      { id: 9, name: "Automation" },
      { id: 10, name: "Support" },
      { id: 11, name: "Technical Consulting" },
      { id: 12, name: "Mobility" },
    ],
    barColor: "bg-gradient-to-r from-red-dark to-gradiant-security-start",
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
        url: "/enterpriseapplication/consulting",
        coverImage: "/services/enterpriseapplication/consulting.svg",
        coverImageAlt: "Consulting",
      },
      {
        url: "/enterpriseapplication/development",
        coverImage: "/services/enterpriseapplication/development.webp",
        coverImageAlt: "Development",
      },
      {
        url: "/enterpriseapplication/support",
        coverImage: "/services/enterpriseapplication/support.svg",
        coverImageAlt: "Support",
      },
      {
        url: "/enterpriseapplication/migration",
        coverImage: "/services/enterpriseapplication/migration-upgrades.webp",
        coverImageAlt: "Migration Upgrades",
      },
    ],
  },
};

// Then use it like:

const EnterpriseApplication = () => {
  const colorContext = useContext(ColorContext);
  if (!colorContext) {
    throw new Error("ColorContext is null");
  }
  const { setLineColor } = colorContext;

  useEffect(() => {
    setLineColor(enterpriseapplicationPageData.pageColor.primaryBorder);
  }, [setLineColor]);

  return <LevelOnePageBuilder pageData={enterpriseapplicationPageData} />;
};

export default EnterpriseApplication;
