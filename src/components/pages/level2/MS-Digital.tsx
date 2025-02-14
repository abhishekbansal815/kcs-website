import React from "react";
import LevelTwoPageBuilder, { LevelTwoPage } from "./Index";
import icons from "@/components/utils/Icons";

const EAPageData: LevelTwoPage = {
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
    pageTitle: "DIGITALISATION",
    pageDescription:
      "We bring innovation, effortless change management, and ongoing support, offering a cost-effective path to digital transformation.",
    coverImage: "/services/managedservice/Digital/hero.png",
    coverImageAlt: "Managed Services",
    coverIcon: "/services/managedservice/KCS MS.png",

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
      "In today’s fast-paced world of business, digitisation is a must. Our specialised teams ensure a smooth transition for your business, leveraging our expertise for swift, disruption-free outcomes. By entrusting KCS with your digital journey, you can stay focused on your core activities, your business risks are minimized and at the same time flexibility is maximized.",
    title1: "",
    description:
      "We bring innovation, effortless change management, and ongoing support, offering a cost-effective path to digital transformation. In essence, collaborating with our specialised teams in digital transformation propels your business forward, ensuring sustained growth and competitiveness.",

    description1: "",
    image: "/services/managedservice/Digital/sub hero.png",
    imageAlt: "Managed Services",

    li: [
      "Digital - Workflow Analysis",
      "Digital - Custom Software Development",
      "Digital - Software Integration",
    ],
    rightLi: [
      "Digital- Cloud Services",
      "Digital - Data Management and Analytics",
      "Digital - Training and Change Management ",
    ],
  },
  cardSection: [
    {
      title: "Digital - Workflow Analysis",
      heading: "",
      description:
        "Conduct a thorough analysis of your current workflows to identify areas that can be digitised and optimised. Understand the specific needs and pain points of the clients to tailor solutions accordingly.",
      description1: "",
      description2: "",
      description3: "",

      cardImage: "/services/managedservice/Digital/1.svg",
    },
    {
      title: "Digital - Custom Software Development",
      heading: "",
      description:
        "Create custom software solutions tailored to the client's unique workflow requirements. Develop mobile apps or web applications to facilitate remote access and collaboration.",
      description1:
        "Mobile Solutions: Develop mobile applications to enable on-the-go access to key workflow processes. Optimize workflows for mobile devices to enhance flexibility and responsiveness.",
      description2:
        "User Experience (UX) Design: Focus on creating intuitive and user-friendly interfaces to improve overall user experience. Conduct usability testing to gather feedback and make continuous improvements.",
      description4:
        "Continuous Improvement: Provide ongoing support and maintenance to ensure that the digital workflows remain efficient and up-to-date. Regularly assess and update systems based on changing business needs and technological advancements.",
      li: [
        "Mobile Solutions",
        "User Experience (UX) Design",
        "Continuous Improvement",
      ],
      cardImage: "/services/managedservice/Digital/2.svg",
    },
    {
      title: "Digital - Software Integration",
      heading: "",
      description:
        "Recommend and implement software solutions that streamline and automate various stages of the workflow. Integrate existing systems to ensure smooth data flow and communication between different departments or processes.",
      description1: "",
      description2: "",
      description3: "",

      cardImage: "/services/managedservice/Digital/3.svg",
    },
    {
      title: "Digital- Cloud Services",
      heading: "",
      description:
        "Implement cloud-based solutions to enhance accessibility, scalability, and data security. Migrate existing workflows to cloud platforms to enable remote work and improve collaboration.",
      description1: "",
      description2: "",
      description3: "",

      cardImage: "/services/managedservice/Digital/4.svg",
    },
    {
      title: "Digital - Data Management and Analytics",
      heading: "",
      description:
        "Implement data management solutions to organize and store digital information efficiently. Incorporate analytics tools to provide insights into workflow performance and identify areas for further improvement.",
      description1: "",
      description2: "",
      description3: "",
      cardImage: "/services/managedservice/Digital/5.svg",
    },
    {
      title: "Digital - Training and Change Management",
      heading: "",
      description:
        "Provide training programs to ensure that employees can effectively use new digital tools and platforms. Assist in change management to help employees adapt to the digital transformation.",
      description1: "",
      description2: "",
      description3: "",
      cardImage: "/services/managedservice/Digital/6.svg",
    },
  ],

  enterpriseServices: {
    title:
      "",
    leftServices: [
      { id: 1, name: "Application layer services" },
      { id: 2, name: "Network automation" },
      { id: 3, name: "Audits and assessments" },
      { id: 4, name: "Virtual private networks" },
      { id: 5, name: "Private intranet" },
      { id: 6, name: "Point to point solutions" },
    ],

    rightServices: [
      { id: 7, name: "Managed wi-fi" },
      { id: 8, name: "Caballing" },
      { id: 9, name: "Automation" },
      { id: 10, name: "Support" },
      { id: 11, name: "Technical Consulting" },
      { id: 12, name: "Mobility" },
    ],
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
    ]
  },
};

const EA = () => {
  return <LevelTwoPageBuilder pageData={EAPageData} />;
};

export default EA;
