import React from "react";
import LevelTwoPageBuilder, { LevelTwoPage } from "./Index";
import icons from "@/components/utils/Icons";

const EAPageData: LevelTwoPage = {
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
    pageTitle: "UNIFIED COMMUNICATION",
    pageDescription:
      "Elevate your business communication by combining the power of unified communication tools with the intelligence of CRM, fostering a holistic approach to customer interactions.",
    coverImage: "/services/network/communication/hero.png",
    coverImageAlt: "Unified Communication Services",
    coverIcon: "/services/network/KCS Network.png",
    coverList: [
    {
      title: "Consulting",
      url: "/network/network-consulting",
    },
    {
      title: "Implementation",
      url: "/network/implementation",
    },
    {
      title: "Support",
      url: "/network/network-support",
    },
    {
      title: "Unified Communication",
      url: "/network/unified-communication",
    },
  ],
  },
  midSection: {
    title:
      "Welcome to our cutting-edge Unified Communication Solution seamlessly integrated with Customer Relationship Management (CRM). Elevate your business communication by combining the power of unified communication tools with the intelligence of CRM, fostering a holistic approach to customer interactions.",
    title1:
      "We specialise in offering CRM integrated with unified communication solutions using 3CX, Twilio and Microsoft Teams, Zoom, Google Meet",
    description:
      "Unified Communication in the CRM context is a strategic integration that brings together communication channels and customer data into a unified platform. This synergy allows for a comprehensive view of customer interactions, enabling your team to respond intelligently, personalize engagements, and build lasting relationships. From managing client calls to tracking communication history, our solution ensures that every interaction contributes to a deeper understanding of your customers.",

    description1: "",
    image: "/services/network/communication/sub hero.png",
    imageAlt: "Unified Communication Services",

    li: ["Implementation", "Support"],
    rightLi: ["Cloud"],
  },
  cardSection: [
    {
      title: "Unified Communication – Implementation",
      heading: "",
      description:
        "Our implementation process is designed to seamlessly integrate Unified Communication with your existing CRM system. We begin by understanding your specific business processes and CRM requirements, tailoring the solution to align with your goals. This integration optimizes customer interactions by providing your team with a unified interface where they can access communication logs, customer preferences, and relevant data in real-time.",
      description1:
        "During implementation, our experts focus on user training to ensure that your team can leverage the integrated solution effectively. By aligning communication tools with CRM workflows, we enhance efficiency and empower your staff to deliver personalized and timely interactions with clients. Our deployment strategy is orchestrated to minimize disruptions and maximize the impact on customer relationship management.",
      description2: "",
      description3: "",
      cardImage: "/services/network/communication/1.svg",
    },
    {
      title: "Unified Communication – Support",
      heading: "",
      description:
        "Our commitment to your success extends beyond implementation with robust support services tailored for the unified communication and CRM integration. Our support team is available 24/7 to address any technical issues, provide guidance on system usage, and ensure seamless operation. We understand the critical role this integration plays in your customer-centric approach, and our support services are geared towards maintaining the continuity of these efforts.",
      description1:
        "We understand the dynamic nature of business communication, and our support services are designed to adapt to your evolving needs. Whether it's troubleshooting technical issues, expanding the system to accommodate growth, or incorporating new features, our support team is ready to provide proactive solutions to keep your communication infrastructure at its best.",
      description2: "",
      description3: "",

      cardImage: "/services/network/communication/2.svg",
    },
    {
      title: "Unified Communication -Training",
      heading: "",
      description:
        "In addition to reactive support, we offer ongoing training programs to keep your team updated on the latest features and best practices. Our goal is not just to meet your expectations but to exceed them by ensuring that your Unified Communication Solution continues to evolve and contribute to the success of your organization.",
      description1: "",
      description2: "",
      description3: "",
      cardImage: "/services/network/communication/3.svg",
    },
    {
      title: "Unified Communication – Cloud",
      heading: "",
      description:
        "Needs Assessment and Solution Design: Conducting a thorough analysis of your organization's communication requirements. Designing a tailored cloud PABX solution that aligns with your business goals and growth plans.",
      description1:
        "Customization and Configuration: Tailoring the cloud PABX solution to meet the unique requirements of your organization. Configuring features such as auto-attendants, call routing, voicemail, and integration with other business tools.",
      description2:
        "Scalability: Designing the cloud PABX solution to be scalable, allowing for easy expansion as your business grows. Ensuring that the system can adapt to changes in user numbers and communication needs.",
      description4:
        "Cost Management: Advising on cost-effective solutions and helping to manage expenses related to cloud PABX services. Monitoring usage patterns and recommending adjustments to optimize costs.",
      cardImage: "/services/network/communication/4.svg",
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

        url: "/network/network-consulting",
        coverImage: "/services/enterpriseapplication/consulting.svg",
        coverImageAlt: "Consulting",

      },
      {
        url: "/network/implementation",
        coverImage: "/services/network/implementation.webp",
        coverImageAlt: "Implementation",
      },
      {
        url: "/network/network-support",
        coverImage: "/services/enterpriseapplication/support.svg",
        coverImageAlt: "Network Support",
      },
      {
        url: "/network/unified-communication",
        coverImage: "/services/network/unified-communication.webp",
        coverImageAlt: "Unified Communication",
      },
    ]
  },
};

const EA = () => {
  return <LevelTwoPageBuilder pageData={EAPageData} />;
};

export default EA;
