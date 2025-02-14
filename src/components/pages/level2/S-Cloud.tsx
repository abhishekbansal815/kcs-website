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
    pageTitle: "SECURITY - CLOUD",
    pageDescription:
      "We help you design controls and policies based on business requirements to protect your data, more importantly your business information assets in the cloud.",
    coverImage: "/services/security/cloud/Cloud Hero.svg",
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
      "We help you design controls and policies based on business requirements to protect your data, more importantly your business information assets in the cloud.",
    title1: "",
    description:
      "Our Cloud risk services assess the readiness of your business from security standpoint to interact with cloud applications and tools for your business to continuously protect those assets. Whether you are an organisation having information assets in the cloud or you are a cloud provider yourself, we can assist in building a robust strategy and mechanism for cybersecurity. As all cloud models are not the same, we address threats for each model on its own merit and not of one-size fits all approach.",

    description1:
      "Following services, we offer to help you manage security for your cloud assets",
    image: "/services/security/cloud/Cloud sub hero.svg",
    imageAlt: "Security Services",

    li: [
      "Identity & Access management for cloud application (IAM)",
      "Privilege Access Management for cloud applications and infrastructure (PAM)",
      "Data Leakage Prevention / Management for cloud storage (DLP/DLM)",
    ],
    rightLi: [
      "Cloud server security",
      "Cloud Email Security (spam filtering, phishing, etc)",
      "Cloud Data Backup and Disater Recovery",
    ],
  },
  cardSection: [
    {
      title: "Infrastructure as a Service",
      heading: "",
      description:
        "Infrastructure as a Service is experiencing phenomenal growth, with businesses moving on the IaaS bandwagon in hordes. IaaS security framework should consider threat from within and outside of the business with emphasis on authentication, access, accounts and monitoring. We help you develop robust and contemporary governance mechanism to deal with all kinds of threats emanating of an IaaS approach.",
      description1:
        "Following services, we offer to help you manage security for your cloud assets",
      description2: "",
      description3: "",
      li: [
        "Identity and Access Management Advisory",
        "Identity & Access management (IAM)",
        "Privilege Access Management (PAM)",
      ],
      cardImage: "/services/security/cloud/infrastructure.svg",
    },
    {
      title: "Platform as a Service",
      heading: "",
      description:
        "Platform as a Service though offers immense benefits to business working in the current technological landscape, it brings with itself the challenges of deployment, management, extensibility and control. The primary focus of our services for this model is on protecting data against the possibility of an outage from a Cloud provider or risks associated with vendor-lock in. We assist your business in understanding the security readiness of the cloud partner providing PaaS services to you. We can also help you in assessment and development of policies and procedure to protect your business information assets if you chose to adopt PaaS for your business.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer to help you manage security for your cloud assets",
      li: [
        "Identity and Access Management Advisory",
        "Identity & Access management (IAM)",
        "Privilege Access Management (PAM)",
        "Compliance, VAPT, DLP/DLM",
      ],
      cardImage: "/services/security/cloud/platform.svg",
    },
    {
      title: "Software as a Service",
      heading: "",
      description:
        "Software as a service provides agility, cost savings and enhanced collaboration for today’s business, however, with that is also adds to the vulnerability of a business as it is hosted in third-party infrastructure running on third –party developed code. SaaS requires information access and sharing is protected also information distribution policies to be robust and effective monitoring of any breaches of the laid down business rules.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer to help you manage security for your cloud assets",
      li: [
        "Identity and Access Management Advisory",
        "Identity & Access management (IAM)",
        "Privilege Access Management (PAM)",
        "Compliance, Backups",
      ],
      cardImage: "/services/security/cloud/software.svg",
    },
    {
      title: "Cloud Risk",
      heading: "",
      description:
        "Our Cloud risk services asses the reediness of your business from security standpoint to interact with cloud applications and tools for your business. We help you design controls and policies based on business requirements to protect your data, more importantly your business information assets.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer to help you manage security for your cloud assets",
      li: ["Cloud Protection / Compliance (WAF, CASB, DDoS protection, etc)"],
      cardImage: "/services/security/cloud/cloud.svg",
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
