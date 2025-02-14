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
    pageTitle: "SECURITY - ON PREMISE",
    pageDescription:
      "Business information assets hosted internally are not free from cyber security threats, we help business in securing their locally hosted information and data assets in a cost effective and holistic manner",
    coverImage: "/services/security/premise/premise hero.png",
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
      "Business information assets hosted internally are not free from cyber security threats, one of the biggest disadvantages for on premises information assets is that, most off the time they do not have access to sophisticated cyber security measures and resources which any cloud provider would have by default. We help business in securing their locally hosted information and data assets in a cost effective and holistic manner.",
    title1:
      "On-Premises Security Application , Email , Web, Infrastructure, Storage",
    description:
      "On-premises Security for self-hosted applications, email server, Web, server's infrastructure, and storage. On-premises security, is exactly what it sounds like—security measures for information technology assets which are physically present on the premises of a business. On-premises security refers to both the rules and tools in place to protect the security and accessibility of computer networks, including both hardware and software. Some examples include firewalls, VPNs, and antivirus software—along with physical security measures.",

    description1:
      "Following services, we offer help you manage security for our on-premise assets",
    image: "/services/security/premise/premise sub hero.png",
    imageAlt: "Security Services",

    li: [
      "Identity & Access management (IAM)",
      "Data Leakage Prevention / Management (DLP/DLM)",
      "Perimeter Security (FW, NIDS, NIPS, UTM, etc)",
      "Data Backup (on-prem, Cloud, etc)",
    ],
    rightLi: [
      "Privilege Access Management (PAM)",
      "Endpoint Security (AV, HIPS, HIDS, HFW, etc)",
      "Email Security (spam filtering, phishing, etc)",
    ],
  },
  cardSection: [
    {
      title: "Mobility and BYOD",
      heading: "",
      description:
        "Mobility and BYOD are the norm rather that concepts for business of all sizes. By offering mobility and BYOD options within your business you are exposing your IT infrastructure and data to variety of vulnerabilities. Our security services for mobility and BYOD helps you with the assessment and minimising of risk, so you can offer greater flexibility and freedom of working within your business.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer help you manage security for our on-premise assets",
      li: ["Mobile Device Management (MDM)", "DLP"],
      cardImage: "/services/security/premise/Mobility & byod.svg",
    },
    {
      title: "Network Architechture",
      heading: "",
      description: "Our security services around network architecture helps you to build a secure and trusted network security architecture. Our recommendations around network security would be aligned to business objectives and requirements. At the same time the architecture would be geared to rationalise the cost of security in relation to the business risk appetite.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer help you manage security for our on-premise assets",
      li: ["Network & Perimeter Security (FW, NIDS, NIPS, UTM, etc)"],
      cardImage: "/services/security/premise/Network Architecture.svg",
    },
    {
      title: "Network Compliance",
      heading: "",
      description:
        "We offer our customers consulting services to identify gaps for respective referenced standards to meet customer compliance obligations. We do high level analysis of your network for security compliance, regulation compliance, for industry standards and industry best practises compliance.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer help you manage security for our on-premise assets",
      li: ["Security Maturity Review"],
      cardImage: "/services/security/premise/Network Compliance.svg",
    },
    {
      title: "Network Security Assessment",
      heading: "",
      description:
        "We offer a range of services in identification, analysis and evaluation of your current security infrastructure and configuration to ensure the security design and configuration is keeping up with the time and business requirements. We also recommend how you can future proof your business security requirements with enhancements or augmenting current infrastructure with new enhancements.",
      description1:
        "",
      description2: "",
      description3: "Following services, we offer help you manage security for our on-premise assets",
      li: ["Network Architecture & Design Review"],
      cardImage: "/services/security/premise/Security Assessment.svg",
    },
    {
      title: "Outsourcing Strategy",
      heading: "",
      description:
        "We can assist you in two ways to outsource IT security if you do not have the necessary skill set in-house to manage and maintain IT security in house.",
      description2:
        "We can assist you by offering our manages services around IT security, wherever we cannot offer what the business needs. We will assist you in identifying, evaluating and transitioning of your security services and functions to the preferred partner.",
        description1:
        "",
      
      description3: "Following services, we offer help you manage security for our on-premise assets",
      li: [
        "Managed Vulnerability Scanning",
        "Managed SIEM/SOC",
        "CISO as a Service / Onsite Information Security Specialists",
      ],
      cardImage: "/services/security/premise/Outsourcing Strategy.svg",
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
