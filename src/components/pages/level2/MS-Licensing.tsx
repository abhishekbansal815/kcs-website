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
    pageTitle: "IT SOFTWARE & HARDWARE LICESNSING",
    pageDescription:
      "Our Managed services with licencing can help decipher complex licensing structures and ensure organisations are complying with licencing requirements.",
    coverImage: "/services/managedservice/Licensing/hero.png",
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
      "Managed services for IT licensing play a crucial role in helping businesses manage and stay compliant with various licenses in the IT, software, and business productivity domains. Many software vendors offer a variety of licensing models, each with its own terms and conditions. Understanding and navigating through these complexities can be challenging for organizations. Our Managed services with licencing can help decipher complex licensing structures and ensure organisations are complying with licencing requirements.",
    title1:
      "License management, Cloud services license management, License risk and compliance management",
    description:
      "These managed services can be tailored to meet the specific needs and requirements of businesses in different industries, ensuring that they not only manage their IT, software, and business productivity effectively but also remain compliant with relevant licenses and regulations.",

    description1: "",
    image: "/services/managedservice/Licensing/sub hero.png",
    imageAlt: "Managed Services",

    li: [
      "License Management Services",
      "Vendor Management Services",
      "IT License Compliance Services",
    ],
    rightLi: [
      "Cloud Services License Management",
      "Training and Education",
    ],
  },
  cardSection: [
    {
      title: "License - License Management Services",
      heading: "",
      description:
        "Software Asset Management (SAM): Implementing SAM solutions to track software licenses, usage, and compliance.",
      description1:
        "License Optimization: Ensuring optimal utilization of software licenses to minimize costs and maintain compliance.",
      description2:
        "Collaboration Tools Management: Overseeing the use of collaboration tools and ensuring compliance with licensing agreements.",
      description4:
        "Productivity Software Management: Managing licenses for business productivity software and ensuring compliance with usage policies.",
      li: [
        "Software Asset Management",
        "License Optimization",
        "Collaboration Tools Management",
        "Productivity Software Management",
      ],
      cardImage: "/services/managedservice/Licensing/1.svg",
    },
    {
      title: "License - Cloud Services Management",
      heading: "",
      description:
        "Cloud Compliance Services: Ensuring that cloud services and deployments adhere to licensing agreements and compliance standards.",
      description1:
        "Cost Management: Optimizing cloud usage to control costs and ensure compliance with licensing models.",
      description2: "",
      description3: "",
      li: ["Cloud Compliance Services", "Cost Management"],
      cardImage: "/services/managedservice/Licensing/2.svg",
    },
    {
      title: "License - Vendor Management Services",
      heading: "",
      description:
        "Vendor Compliance Monitoring: Ensuring that vendors comply with licensing agreements and contractual obligations. At the same time, managing relationships with multiple software vendors and ensuring compliance with each vendor's licensing terms can be daunting.",
      description1:
        "Negotiation and Renewal Services: Managing vendor relationships, negotiations, and license renewals to optimize costs.",
      description2: "",
      description3: "",
      li: ["Vendor Compliance Monitoring", "Negotiation and Renewal Services"],
      cardImage: "/services/managedservice/Licensing/3.svg",
    },
    {
      title: "License - Training and Education",
      heading: "",
      description:
        "Employee Training: Providing training programs to educate employees on licensing policies and compliance requirements.",
      description1:
        "Documentation and Policies: Developing and maintaining documentation outlining licensing policies and compliance procedures.",
      description2:
        "Audit Preparedness: Software vendors may conduct audits to verify compliance. Being prepared for such audits requires accurate record-keeping and documentation of software licenses. Managed services can assist in maintaining audit-ready documentation and processes.",
      description3: "",
      li: [
        "Employee Training",
        "Documentation and Policies",
        "Audit Preparedness",
      ],
      cardImage: "/services/managedservice/Licensing/4.svg",
    },
    {
      title: "License - IT License Compliance Services",
      heading: "",
      description:
        "Compliance Monitoring: Keeping abreast of license regulations and ensuring that IT systems comply with relevant standards. Risk Assessment Services: Identifying potential risks related to licensing and compliance and developing strategies to mitigate them. Non-compliance with software licenses can result in significant financial penalties and legal consequences.",
      description1:
        "Compliance Reporting: Generating regular reports to demonstrate compliance to internal stakeholders and regulatory authorities.",
      description2:
        "Legal and Compliance Consultation: Providing legal advice on licensing agreements, compliance issues, and contractual obligations.",
      description3:
        "Compliance Consultation: Offering expert guidance on industry-specific compliance standards and best practices.",
      li: [
        "Compliance Monitoring",
        "Risk Assessment Services",
        "Compliance Reporting",
        "Legal and Compliance Consultation",
        "Compliance Consultation",
      ],
      cardImage: "/services/managedservice/Licensing/5.svg",
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
