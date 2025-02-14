import React from "react";
import LevelTwoPageBuilder, { LevelTwoPage } from "./Index";
import icons from "@/components/utils/Icons";

const EAPageData: LevelTwoPage = {
  pageColor: {
    primaryText: "text-blue-light",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-blue-light to-gradiant-security-start",
    primaryBackground: "bg-blue-light",
    primaryBorder: "border-blue-light",
    primaryShadow: "primary-shadow1",
    HprimaryBackground: "hover:bg-blue-light",
    AprimaryBackground: "active:bg-blue-light",
    // barColor: "bg-gradient-to-r from-white to-blue-light",
  },

  coverSection: {
    pageTitle: "SECURITY - INTERNET OF THINGS",
    pageDescription:
      "Today’s businesses operate on a real-time, cross- geography and always-on basis. A hybrid model of security is something that business can leverage to augment their operations and effectiveness.",
    coverImage: "/services/security/hybrid/hybrid hero.png",
    coverImageAlt: "Security Services",
    coverIcon: "/services/security/KCS Security.png",
    coverList: [
      {
        title: "On Premise",
        url: "/security/premise",
      },
      {
        title: "Cloud",
        url: "/security/cloud",
      },
      {
        title: "Hybrid",
        url: "/security/hybrid",
      },
      {
        title: "Compliance",
        url: "/security/compliance",
      },
    ],
  },
  midSection: {
    title:
      "A hybrid inside-outside model of cyber security defence and response is rapidly emerging as a cornerstone for any good cyber security architecture.",
    title1: "",
    description:
      "Organizations find this architecture useful because it covers capabilities across the modern enterprise estate that now spans on premise, mobile devices, many clouds, and IoT / Operational technology. We apply the emerging strategies from standards and interoperable tools that work across environments, on premise and in clouds, to ultimately ensure secure access and protection of data regardless of where the user or the data resides. We help organisations invest in the right security controls in the right places.",

    description1:
      "Following services, we offer to help you manage security for your hybrid assets",
    image: "/services/security/hybrid/Hybrid sub hero.png",
    imageAlt: "Security Services",

    li: [
      "Migration and configuration Advisory",
      "Monitoring Advisory",
      "Intrusion Detection (NIDS, HIDS, CIDS)",
    ],
    rightLi: [
      "Behavioural Monitoring",
      "Data protection, endpoint security",
      "Backup and disaster recovery strategies",
    ],
  },
  cardSection: [
    {
      title: "Industrial Controls",
      heading: "",
      description:
        "This service delivers a high-level security risk assessment of your Operational Technology environment. It includes any Industrial Control Systems, Process Control Systems; and Supervisory Control systems. Importantly, the service also considers integration of your industrial control systems with your corporate IT environment.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer help you manage security for our hybrid assets",
      li: ["Architecture", "Perimeter", "Access and privilege management"],
      cardImage: "/services/security/hybrid/industrial controls.svg",
    },
    {
      title: "Intelligence Analytics",
      heading: "",
      description:
        "Our services helps you visualise and understand meaningfully the various security logs and events from your network and network security infrastructure. The analytics helps you with better View, Comply and Respond to various security threats for your business.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer help you manage security for our hybrid assets",
      li: [
        "Custom Report development",
        "Custom dashboard development",
        "SEIM / SOC",
      ],
      cardImage: "/services/security/hybrid/intelligence analysis.svg",
    },
    {
      title: "Identity management  access management",
      heading: "",
      description:
        "Today’s business are borderless, business data needs to be protected irrespective of where it resides on premise or in the cloud. Access management and identify management strategy should facilitate a solution which is not visibly complex or overwhelming for the legal users of the data.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer help you manage security for our hybrid assets",
      li: [
        "Identity and Access Management Advisory",
        " Identity & Access management (IAM)",
        "Privilege Access Management (PAM)",
      ],
      cardImage: "/services/security/hybrid/access management.svg",
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

        url: "/security/premise",
        coverImage: "/services/security/premise.svg",
        coverImageAlt: "On Permise",

      },
      {
        url: "/security/cloud",
        coverImage: "/services/security/cloud.svg",
        coverImageAlt: "",
      },
      {
        url: "/security/hybrid",
        coverImage: "/services/security/hybrid.svg",
        coverImageAlt: "Hybrid",
      },
      {
        url: "/security/compliance",
        coverImage: "/services/security/compliance.svg",
        coverImageAlt: "Compliance",
      },
    ]
  },
};

const EA = () => {
  return <LevelTwoPageBuilder pageData={EAPageData} />;
};

export default EA;
