import React from "react";
import LevelTwoPageBuilder, { LevelTwoPage } from "./Index";
import icons from "@/components/utils/Icons";

const ProptechPageData: LevelTwoPage = {
  pageColor: {
    primaryText: "text-blue-dark",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-blue-dark to-gradiant-security-start",
    primaryBackground: "bg-blue-dark",
    primaryBorder: "border-blue-dark",
    primaryShadow: "primary-shadow3",
    HprimaryBackground: "hover:bg-blue-dark",
    AprimaryBackground: "active:bg-blue-dark",
    // barColor: "bg-gradient-to-r from-white to-blue-dark",
  },

  coverSection: {
    pageTitle: "PROPTECH SERVICES",
    pageDescription:
      "We offer a range of Proptech services to help you leverage technology in the real estate sector.",
    coverImage: "/services/proptech/Proptech_Hero.png",
    coverImageAlt: "Proptech Services",
    coverIcon: "/services/proptech/Proptech_Icon.png",
    coverList: [
      {
        title: "Proptech",
        url: "/proptech",
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
        url: "/proptech/integration",
      },
    ],
  },

  midSection: {
    title:
      "Our Proptech services are designed to help you integrate technology into your real estate operations.",
    title1: "",
    description:
      "We provide consulting, implementation, and support services to help you leverage the latest Proptech solutions. Our team of experts can assist you in integrating technology into your real estate operations to improve efficiency and enhance the customer experience.",
    description1:
      "Our services include:",
    image: "/services/proptech/Proptech_Mid.png",
    imageAlt: "Proptech Services",

    li: [
      "Smart Building Solutions",
      "Property Management Systems",
      "Tenant Experience Platforms",
    ],
    rightLi: [
      "IoT Integration",
      "Data Analytics",
      "Sustainability Solutions",
    ],
  },
  cardSection: [
    {
      title: "Smart Building Solutions",
      heading: "",
      description:
        "Our Smart Building Solutions help you create intelligent buildings that enhance the tenant experience and improve operational efficiency.",
      description1:
        "We offer a range of services to help you implement smart building technologies, including IoT integration, data analytics, and sustainability solutions.",
      description2: "",
      description3: "",
      li: [
        "IoT Integration",
        "Data Analytics",
        "Sustainability Solutions",
      ],
      cardImage: "/services/proptech/smart_building.png",
    },
    {
      title: "Property Management Systems",
      heading: "",
      description:
        "Our Property Management Systems help you streamline your operations and improve the tenant experience.",
      description1:
        "We offer a range of services to help you implement and manage property management systems, including consulting, implementation, and support.",
      description2: "",
      description3: "",
      li: [
        "Consulting",
        "Implementation",
        "Support",
      ],
      cardImage: "/services/proptech/property_management.png",
    },
    {
      title: "Tenant Experience Platforms",
      heading: "",
      description:
        "Our Tenant Experience Platforms help you enhance the tenant experience and improve tenant retention.",
      description1:
        "We offer a range of services to help you implement and manage tenant experience platforms, including consulting, implementation, and support.",
      description2: "",
      description3: "",
      li: [
        "Consulting",
        "Implementation",
        "Support",
      ],
      cardImage: "/services/proptech/tenant_experience.png",
    },
  ],

  enterpriseServices: {
    title:
      "Our Enterprise Services",
    leftServices: [
      { id: 1, name: "Smart Building Solutions" },
      { id: 2, name: "Property Management Systems" },
      { id: 3, name: "Tenant Experience Platforms" },
      { id: 4, name: "IoT Integration" },
      { id: 5, name: "Data Analytics" },
      { id: 6, name: "Sustainability Solutions" },
    ],

    rightServices: [
      { id: 7, name: "Consulting" },
      { id: 8, name: "Implementation" },
      { id: 9, name: "Support" },
      { id: 10, name: "Integration" },
    ],
  },

  engagement: {
    steps: [
      {
        number: "01",
        title: "CONSULT",
        description:
          "We provide consulting services to help you identify the best Proptech solutions for your needs.",
        icon: icons.Consult,
      },
      {
        number: "02",
        title: "IMPLEMENT",
        description:
          "We help you implement Proptech solutions to improve your operations and enhance the tenant experience.",
        icon: icons.Implement,
      },
      {
        number: "03",
        title: "SUPPORT",
        description:
          "We provide ongoing support to ensure your Proptech solutions continue to meet your needs.",
        icon: icons.Support,
      },
      {
        number: "04",
        title: "INTEGRATE",
        description:
          "We help you integrate Proptech solutions into your existing systems and processes.",
        icon: icons.Integrate,
      },
    ],
  },
  iconSection: {
    coverList: [
      {
        url: "/proptech/consulting",
        coverImage: "/services/proptech/consulting.svg",
        coverImageAlt: "Consulting",
      },
      {
        url: "/proptech/implementation",
        coverImage: "/services/proptech/implementation.svg",
        coverImageAlt: "Implementation",
      },
      {
        url: "/proptech/support",
        coverImage: "/services/proptech/support.svg",
        coverImageAlt: "Support",
      },
      {
        url: "/proptech/integration",
        coverImage: "/services/proptech/integration.svg",
        coverImageAlt: "Integration",
      },
    ]
  },
};

const Proptech = () => {
  return <LevelTwoPageBuilder pageData={ProptechPageData} />;
};

export default Proptech;