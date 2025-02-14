import React from "react";
import LevelTwoPageBuilder, { LevelTwoPage } from "./Index";
import icons from "@/components/utils/Icons";

const EAPageData: LevelTwoPage = {
  pageColor: {
    primaryText: "text-red-dark",
    primaryBackground: "bg-red-dark",
    primaryBorder: "border-red-dark",
    primaryShadow: "primary-shadow2",
    HprimaryBackground: "hover:bg-red-dark",
    AprimaryBackground: "active:bg-red-dark",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-red-dark to-red-light",
    // barColor: "bg-gradient-to-r from-white to-red-dark",
  },

  coverSection: {
    pageTitle: "ENTERPRISE APPLICATION & SUPPORT",
    pageDescription:
      "We offer four support options based on your needs and requirements. Ad-hoc, Primary care, professional Care, Total Care to cover all types and size of businesses.",
    coverImage: "/services/enterpriseapplication/support/Support hero.png",
    coverImageAlt: "Enterprise Application Services",
    coverIcon: "/services/enterpriseapplication/KCS EA.png",
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
        title: "Migration/Upgrades",
        url: "/enterpriseapplication/migration",
      },
    ],
  },
  midSection: {
    title:
      "Katalyst consulting services offering of managed services for enterprise applications typically provide a range of ongoing support and maintenance activities to ensure the optimal performance, security, and adaptability of the applications.",
    title1:
      "Monitoring& Management, Training, Backup & DR, Reporting & Analytics",
    description:
      "Our managed services around enterprise applications, typically provide detailed reports with findings, recommendations, and a roadmap for addressing identified issues. This proactive approach helps organizations enhance the overall efficiency, security, and reliability of their enterprise applications.",

    description1: "",
    image: "/services/enterpriseapplication/ea-thumb-1.png",
    imageAlt: "Enterprise Application Services",

    li: [
      "Application Monitoring and Management",
      "Backup and Disaster Recovery",
      "Vendor Management",
      "Customization and Enhancements",
    ],
    rightLi: [
      "Security and Compliance Management",
      "Reporting and Analytics",
      "Cost and Resource Utilization Audit",
    ],
  },
  cardSection: [
    {
      title: "Application Monitoring and Management",
      heading: "",
      description:
        "Continuous monitoring of enterprise applications to identify and address performance issues promptly. Proactive management of application infrastructure, including servers, databases, and middleware, to ensure optimal functionality.",
      description1:
        "Incident Response and Troubleshooting: Rapid response to incidents and issues, with a dedicated support team available to troubleshoot and resolve problems efficiently. Implementation of incident management processes to minimize downtime and disruptions to business operations.",
      description2:
        "Patch Management and Updates: Regularly apply patches, updates, and security fixes to the enterprise applications to protect against vulnerabilities and ensure compliance with the latest standards. Plan and execute updates during non-business hours to minimize impact on operations.",
      description4:
        "Performance Optimization: Continuously monitor and optimize the performance of enterprise applications to ensure responsiveness and scalability. Implement strategies for resource optimization, including load balancing and capacity planning.",
      li: [
        "Incident Response and Troubleshooting",
        "Patch Management and Updates",
        "Performance Optimization",
      ],
      cardImage: "/services/enterpriseapplication/support/1.svg",
    },
    {
      title: "Backup and Disaster Recovery",
      heading: "",
      description:
        "Implement robust backup and disaster recovery solutions to safeguard critical data and ensure business continuity in the event of unexpected outages or data loss. Regularly test and update disaster recovery plans to maintain effectiveness.",
      description1: "",
      description2: "",
      description3: "",
      cardImage: "/services/enterpriseapplication/support/2.svg",
    },
    {
      title: "Reporting and Analytics",
      heading: "",
      description:
        "Develop and maintain reporting and analytics capabilities within the enterprise applications. Provide insights and recommendations based on data analysis to support strategic decision-making.",
      description1: "",
      description2: "",
      description3: "",
      cardImage: "/services/enterpriseapplication/support/3.svg",
    },
    {
      title: "Vendor Management",
      heading: "",
      description:
        "Manage relationships with application OEM to stay informed about updates, new features, and best practices. Coordinate with OEM for issue resolution and escalations when necessary.",
      description1: "",
      description2: "",
      description3: "",
      cardImage: "/services/enterpriseapplication/support/4.svg",
    },
    {
      title: "Cost and Resource Utilization Audit",
      heading: "",
      description:
        "Evaluate the cost-effectiveness of enterprise applications, considering infrastructure costs, licensing fees, and resource utilization. Identify opportunities for cost optimization without compromising performance.",
      description1: "",
      description2: "",
      description3: "",
      cardImage: "/services/enterpriseapplication/support/5.svg",
    },
    {
      title: "Customization and Enhancements",
      heading: "",
      description:
        "Provide support for ongoing customization and enhancements to adapt the enterprise applications to evolving business requirements. Collaborate with the client to understand changing needs and implement necessary modifications.",
      description1: "",
      description2: "",
      description3: "",
      cardImage: "/services/enterpriseapplication/support/6.svg",
    },
    {
      title: "Training and Change Management",
      heading: "",
      description:
        "We can assist you in two ways to outsource IT security if you do not have the necessary skill set in-house to manage and maintain IT security in house.",
      description1:
        "We can assist you by offering our manages services around IT security, wherever we cannot offer what the business needs. We will assist you in identifying, evaluating and transitioning of your security services and functions to the preferred partner.",
      description2:
        "User Support and Training: Provide ongoing user support to address queries, issues, and requests related to the enterprise applications. Offer training sessions for end-users to enhance their proficiency in using the applications effectively.",
      description3: "",
      li: ["User Support and Training"],
      cardImage: "/services/enterpriseapplication/support/7.svg",
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
    ]
  },
};

const EA = () => {
  return <LevelTwoPageBuilder pageData={EAPageData} />;
};

export default EA;
