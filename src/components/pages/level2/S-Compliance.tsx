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
    pageTitle: "SECURITY - GRC",
    pageDescription:
      "In information age all business has the obligation to protect data and privacy associated with personal data. We help you understand your obligations, risk and responsibilities in relation to storage and dissemination of business data",
    coverImage: "/services/security/compliance/compliance hero.svg",
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
      "Our compliance assessment reviews at a high level your organisation’s information security compliance posture, gaps and opportunities. The review would help your organisation align better your obligations around cyber-threats and protection, internally and externally.",
    title1: "",
    description:
      "With onset of GDPR businesses are increasingly understanding that cyber threats cannot be approached in isolation and are a board- level priority. Protecting your environment, reducing the risks, prevention and mitigation of cyber-attacks. Your cyber security and that of your partners, and third parties is a critical part of your regulatory environment. Today’s business needs tools which can provide continuous tracking of compliance in real-time.",

    description1:
      "Following services, we offer to help you manage your obligation with compliance and governance of business data",
    image: "/services/security/compliance/Compliance sub hero.svg",
    imageAlt: "Security Services",

    li: [
      "Governance Advisory",
      "Industry and standard Compliance obligations",
    
    ],
    rightLi: [
      "Cloud Risk analysis",
      "Training and preparation for certifications",
    ],
  },
  cardSection: [
    {
      title: "Governance",
      heading: "",
      description:
        "We help you build, analyse and update your cybersecurity frameworks with tools, approaches and awareness programs spaning across your organisation vertically and horizontally. We partner with you to provide governance framework which would help in addressing current and future threats. By improving controls, audit and assessment polices, spreading awareness for emerging technical threats and changing technological landscape.",
      description1:
        "​",
      description2: "",
      description3: "Following services, we offer to help you manage your obligation with compliance and governance of business data",
      li: [
        "Cyber Security Health Check",
        "Information Security Strategy",
        "Security Maturity Review",
        "Board Advisory and Executive Briefings",
      ],
      cardImage: "/services/security/compliance/governance.svg",
    },
    {
      title: "Risk",
      heading: "",
      description:
        "Cybersecurity frameworks for any organisation start with risk assessment, without an informed and effective risk assessment strategy your organisation might be wasting time, effort and resources in choosing the tools for cybersecurity. Our experts would partner with you to identify various assets within your business which are prone to cyber-attacks and the affect that would have on your business. We keep engaged with you on a continuous basis to monitor and detect risk associated with organisational, process and technological changes within your business. This requires considerable planning and specialist knowledge",
      description1:
        "​",
      description2: "",
      description3: "Following services, we offer to help you manage your obligation with compliance and governance of business data",
      li: [
        "Control Risk Assessment",
        "Third Party Risk Assessment",
        "Cloud Security Assessment",
      ],
      cardImage: "/services/security/compliance/risk.svg",
    },
    {
      title: "Compliance",
      heading: "",
      description:
        "AT KCS we help your business with security audits and advise to meet your obligations around security by assisting with internal audits, preparation for external audits and threat management posture. We help you build and frame policies and procedures to remain compliant and defend from ongoing and upcoming threats. We assist you through our consulting services to meet regulatory and legal requirement by developing purpose-built security awareness and education programs for your business",
      description1:
        "​",
      description2: "",
      description3: "Following services, we offer to help you manage your obligation with compliance and governance of business data",
      li: [
        "Data Privacy Compliance",
        "ISO27001 and NIST Security",
        "Framework Assessment",
        "PCI Compliance Pre-assessment",
        "ASD Essential 8",
        "APRA 234 Compliance",
        "IRAP Compliance Pre-assessment",
        "EU GDPR Readiness Assessment",
        "Board Advisory and Executive Briefings",
        "Network Architecture & Design Review",
      ],
      cardImage: "/services/security/compliance/compliance.svg",
    },
    {
      title: "Cloud Risk",
      heading: "",
      description:
        "Our Cloud risk services asses the reediness of your business from security standpoint to interact with cloud applications and tools for your business. We help you design controls and policies based on business requirements to protect your data, more importantly your business information assets.",
      description1: "",
      description2: "",
      description3: "Following services, we offer to help you manage your obligation with compliance and governance of business data",
      li: ["Quality Assurance and Testing", "Code and Configuration Audit"],
      cardImage: "/services/security/compliance/cloud risk.svg",
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
