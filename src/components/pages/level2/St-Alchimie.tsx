import React from "react";
import LevelTwoPageBuilder, { LevelTwoPage } from "./Index";
import icons from "@/components/utils/Icons";

const AlchimiePageData: LevelTwoPage = {
  pageColor: {
    primaryText: "text-red-dark",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-red-dark to-gradiant-security-start",
    primaryBackground: "bg-red-dark",
    primaryBorder: "border-red-dark",
    primaryShadow: "primary-shadow2",
    HprimaryBackground: "hover:bg-red-dark",
    AprimaryBackground: "active:bg-red-dark",
    // barColor: "bg-gradient-to-r from-white to-red-dark",
  },

  coverSection: {
    pageTitle: "ALCHIMIE SERVICES",
    pageDescription: "We offer a range of Alchimie services to help you leverage technology in the real estate sector.",
    coverImage: "/services/enterpriseapplication/consulting_cover.svg",
    coverImageAlt: "Alchimie Services",
    coverIcon: "/services/enterpriseapplication/consulting_icon.svg",
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
        url: "/studio/alchimie",
      },
    ],
  },

  midSection: {
    title: "Our Services",
    title1: "",
    description: "We offer a wide range of services to help businesses succeed.",
    description1: "",
    image: "/services/enterpriseapplication/mid_image.svg",
    imageAlt: "Our Services",
    li: [
      "Consulting",
      "Architecture & Design",
      "Development",
      "Support",
    ],
    rightLi: [
      "Innovation",
      "Quality",
      "Customer Satisfaction",
    ],
  },

  cardSection: [
    {
      title: "Consulting",
      heading: "",
      description: "We offer comprehensive consulting services to help businesses transform their digital landscape.",
      description1: "",
      description2: "",
      description3: "",
      li: [
        "Business Strategy",
        "Application Development",
        "Digital Transformation",
      ],
      cardImage: "/services/enterpriseapplication/consulting_card.svg",
    },
    {
      title: "Architecture & Design",
      heading: "",
      description: "KCS's expertise in architecture and design ensures that your applications are scalable, maintainable, and adaptable.",
      description1: "",
      description2: "",
      description3: "",
      li: [
        "Scalable Solutions",
        "Maintainable Designs",
        "Adaptable Architectures",
      ],
      cardImage: "/services/enterpriseapplication/architecture_card.svg",
    },
    {
      title: "Development",
      heading: "",
      description: "We develop applications using cutting-edge technologies and frameworks.",
      description1: "",
      description2: "",
      description3: "",
      li: [
        "Modern Technologies",
        "Efficient Frameworks",
        "Secure Development",
      ],
      cardImage: "/services/enterpriseapplication/development_card.svg",
    },
    {
      title: "Support",
      heading: "",
      description: "KCS offers support to help businesses stay up-to-date with the latest technologies and best practices.",
      description1: "",
      description2: "",
      description3: "",
      li: [
        "Technical Support",
        "Performance Optimization",
        "Issue Resolution",
      ],
      cardImage: "/services/enterpriseapplication/support_card.svg",
    },
  ],

  enterpriseServices: {
    title: "Our Enterprise Services",
    leftServices: [
      { id: 1, name: "Consulting" },
      { id: 2, name: "Architecture & Design" },
      { id: 3, name: "Development" },
      { id: 4, name: "Support" },
    ],
    rightServices: [
      { id: 5, name: "Innovation" },
      { id: 6, name: "Quality" },
      { id: 7, name: "Customer Satisfaction" },
    ],
  },

  engagement: {
    steps: [
      {
        number: "01",
        title: "CONSULT",
        description: "We provide consulting services to help you identify the best solutions for your needs.",
        icon: icons.training,
      },
      {
        number: "02",
        title: "DESIGN",
        description: "We help you design scalable and maintainable solutions.",
        icon: icons.training,
      },
      {
        number: "03",
        title: "DEVELOP",
        description: "We develop applications using cutting-edge technologies.",
        icon: icons.training,
      },
      {
        number: "04",
        title: "SUPPORT",
        description: "We provide ongoing support to ensure your solutions continue to meet your needs.",
        icon: icons.training,
      },
    ],
  },

  iconSection: {
    coverList: [
      {
        url: "/enterpriseapplication/consulting",
        coverImage: "/services/enterpriseapplication/consulting_icon.svg",
        coverImageAlt: "Consulting",
      },
      {
        url: "/enterpriseapplication/architecture",
        coverImage: "/services/enterpriseapplication/architecture_icon.svg",
        coverImageAlt: "Architecture & Design",
      },
      {
        url: "/enterpriseapplication/development",
        coverImage: "/services/enterpriseapplication/development_icon.svg",
        coverImageAlt: "Development",
      },
      {
        url: "/enterpriseapplication/support",
        coverImage: "/services/enterpriseapplication/support_icon.svg",
        coverImageAlt: "Support",
      },
    ],
  },
};

const Alchimie = () => {
  return <LevelTwoPageBuilder pageData={AlchimiePageData} />;
};

export default Alchimie;