"use client";

import React, { useContext, useEffect } from "react";
import LevelOnePageBuilder, { LevelOnePage } from "./Index";
import Typography from "@/components/ui/Typography";
import icons from "@/components/utils/Icons";
import { ColorContext } from "@/components/context";

// Example usage:
const managedservicePageData: LevelOnePage = {
  pageColor: {
    primaryText: "text-purple-dark",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-purple-dark to-gradiant-security-start",
    primaryBackground: "bg-purple-dark",
    primaryBorder: "border-purple-dark",
    primaryShadow: "primary-shadow4",
    HprimaryBackground: "hover:bg-purple-dark",
    AprimaryBackground: "active:bg-purple-dark",
    // barColor: "bg-gradient-to-r from-white to-purple-dark",
  },

  coverSection: {
    pageTitle: "IT MANAGED SERVICES",
    pageDescription:
      "Katalyst managed services are designed to help you run your business more efficiently, proactively while rationalising the cost of operations.",
    coverImage: "/services/managedservice/Managed Service hero.png",
    coverImageAlt: "IT Managed Services",
    coverIcon: "/services/managedservice/KCS MS.png",
    // coverList: ["Infrastructure", "Licensing", "Procurement", "Digital"],
    coverList: [
      {
        title: "Infrastructure",
        url: "/managedservice/infrastructure",
      },
      {
        title: "Licensing",
        url: "/managedservice/licensing",
      },
      {
        title: "Procurement",
        url: "/managedservice/procurement",
      },
      {
        title: "Digital",
        url: "/managedservice/digital",
      },
    ],
  },
  midSection: {
    title:
      "Modern businesses are driven by technology, digital presence, real-time collaboration and automation. Without these essentials your business is handicapped and not able to accomplish its true potential. Katalyst managed services are designed to help you run your business more efficiently, proactively while rationalising the cost of operations. Your business success lies in adoption and exploitation of technology for business profits.",
    description:
      "Katalyst managed services portfolio consist of following services.",
    image: "/services/managedservice/manageservice.png",
    imageAlt: "IT Managed Services",

    li: ["Infrastructure", "Licensing", "Procurement", "Digital"],
  },
  SectionTabs: {
    INFRASTRUCTURE: {
      title: "INFRASTRUCTURE",
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
    LICENSES: {
      title: "LICENSES",
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
    PROCUREMENT: {
      title: "PROCUREMENT",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Training employees to recognize and respond to security threats
            requires much more than a technology solution. It requires a program
            that actually changes human behaviours across the organization.
          </p>
          <p className="text-white leading-7">
            KCS academy delivers the framework, roadmap and skills needed to
            develop, maintain and measure a security-driven business culture.
            Through hands-on instruction, interactive labs and exercises.
          </p>
        </div>
      ),
    },
    DIGITALS: {
      title: "DIGITALS",
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
  //     title: "INFRASTRUCTURE",
  //     heading: "",
  //     description:
  //       "Our Infrastructure services manages your IT environment and IT echo systems, encompassing, servers, workstations, applications, databases, websites, networks and mobile devices. Everything put together can get technically challenging for business to manage on their own, Under or inefficient utilisations of your IT assets impacts your business adversely and imposes a significant cost.",
  //     description1:
  //       "Our services not only help you in managing and maintaining your IT assets. More importantly, we work with you to exploit them optimally and maximising business profits through productive utilisation of each and every available IT asset. We make sure your data is secure and robust measures are in place to recover data in case of any eventuality or accident. Taking as step further we also design solutions so your business continues operating under all circumstances.",
  //   },
  //   {
  //     title: "LICENSES",
  //     heading: "",
  //     description:
  //       "Our Enterprise application support is offered in four different slabs, you can choose what best suites your requirements. If you have some unique support requirements, you can reach out to our team and we would be able to help with that.",
  //     description1:
  //       "Our IBS offers ad hoc support on incident basis, other end of the spectrum is our KCS Total Care where we manage the complete environment for you as and integral and extended part of your team. protect critical information and effectively reduce the cost and complexity of your security infrastructure. With various options from KCS EA practice, to manage business application services. Customers get a wide range of options that help business make a choice on available budget and resources.",
  //   },
  //   {
  //     title: "PROCUREMENT",
  //     heading: "",
  //     description:
  //       "Training employees to recognize and respond to security threats requires much more than a technology solution. It requires a program that actually changes human behaviours across the organization.",
  //     description1:
  //       "KCS academy delivers the framework, roadmap and skills needed to develop, maintain and measure a security-driven business culture. Through hands-on instruction, interactive labs and exercises.",
  //   },
  //   {
  //     title: "DIGITALS",
  //     heading: "",
  //     description:
  //       "Digitalisation is at the core of our service portfolio. We can manage the complete digital lifecycle for your business. Our digital services help you lowering operating cost, improve productivity and become proactive. Our digital service help you reach and explore new market segments through social and digital marketing. Our digital services help create new customer acquisition channels, improves working conditions and employee retention. It also improves decision-making through greater visibility of business information.",
  //     description1:
  //       "Intranet, Websites, Animation and marketing, Mobile and app development",
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
    barColor: "bg-gradient-to-r from-purple-dark to-gradiant-security-start",
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
        coverImage: "/services/managedservice/infrastructure.webp",
        coverImageAlt: "Infrastructure",
      },
      {
        url: "/managedservice/licensing",
        coverImage: "/services/managedservice/licensing.webp",
        coverImageAlt: "Licensing",
      },
      {
        url: "/managedservice/procurement",
        coverImage: "/services/managedservice/procurement.webp",
        coverImageAlt: "Procurement",
      },
      {
        url: "/managedservice/digital",
        coverImage: "/services/managedservice/digital.webp",
        coverImageAlt: "Digital",
      },
    ],
  },
};

// Then use it like:

const ManagedService = () => {
  const colorContext = useContext(ColorContext);
  if (!colorContext) {
    throw new Error("ColorContext is null");
  }
  const { setLineColor } = colorContext;

  useEffect(() => {
    setLineColor(managedservicePageData.pageColor.primaryBorder);
  }, [setLineColor]);

  return <LevelOnePageBuilder pageData={managedservicePageData} />;
};

export default ManagedService;
