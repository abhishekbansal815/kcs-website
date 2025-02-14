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
    pageTitle: "APPLICATION & BUSINESS CONSULTING",
    pageDescription:
      "We help with consulting on commercial products Like Sap, Oracle Simphony, Oracle Opera, Vtiger. We are also great proponent of Open source and help with Odoo and ERP among a diverse portfolio of professional open source products.",
    coverImage:
      "/services/enterpriseapplication/consulting/Consulting  hero img.png",
    coverImageAlt: "IT Network Services",
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
      "Enterprise application consulting involves providing guidance and support to businesses in optimizing and leveraging various software applications to meet their specific needs. We help with consulting on commercial products Like Sap, Oracle Simphony, Oracle Opera, Vtiger. We consult on open source applications as well like Mautic, Vtiger Open source, Odoo, ERP Next.",
    title1:
      "System Architecture, Audits, Security and compliance, Workflow automation",
    description:
      "We offer Enterprise application audits which involves a thorough examination of the existing application landscape, processes, and infrastructure within an organization. The goal is to assess the health, performance, security, and compliance of enterprise applications. Here are some common audit services offered by us in the enterprise application space, Performance and Scalability Audit, Business Process and Workflow Audit, Disaster Recovery and Business Continuity Audit.",

    description1:
      "Following areas where we help with consulting around enterprise applications:",
    image: "/services/enterpriseapplication/ea-thumb-1.png",
    imageAlt: "IT Network Services",

    li: [
      "Legacy System Modernization",
      "Application Integration Services",
      "Application Evaluation and Selection",
    ],
    rightLi: [
      "Customization and Tailoring",
      "Business Process Optimization",
    ],
  },
  cardSection: [
    {
      title: "Application Integration Services",
      heading: "",
      description:
        "Assist in integrating diverse enterprise applications to ensure seamless communication and data flow between systems. Implement middleware solutions to facilitate real-time data exchange between different software applications.",
      description1:
        "Customization and Tailoring: Analyse business processes and customize existing enterprise applications to align with specific organizational requirements. Develop and implement custom modules or features to enhance the functionality of standard enterprise software.",
      description2:
        "Legacy System Modernization: Evaluate and upgrade outdated legacy systems to modern technologies and architectures. Migrate data and functionality from legacy systems to contemporary platforms, ensuring compatibility and improved performance.",
      description3: "",
      li: ["Network Consulting", "Network Design", "Network Architecture"],
      cardImage:
        "/services/enterpriseapplication/consulting/integration services.svg",
    },
    {
      title: "Business Process Optimization",
      heading: "",
      description:
        "Conduct a thorough analysis of existing business processes and identify opportunities for improvement using enterprise applications. Recommend and implement solutions to streamline workflows, enhance efficiency, and reduce operational costs.",
      description1:
        "Workflow Automation: Develop workflow automation solutions to streamline business processes and improve operational efficiency. Implement business process management (BPM) systems to orchestrate and optimize workflows.",
      description2:
        "Business Process and Workflow Audit: Evaluate the alignment of enterprise applications with business processes and workflows. Identify opportunities for automation and optimization of business processes.",
      description3: "",
      li: [
        "Business process optimisation",
        "Business process automation",
        "Business process audits",
      ],
      cardImage:
        "/services/enterpriseapplication/consulting/process optimization.svg",
    },
    {
      title: "Application Security and Compliance Consulting",
      heading: "",
      description:
        "Conduct security assessments to identify vulnerabilities in enterprise applications. Implement security measures and ensure compliance with industry regulations and data protection standards.",
      description1:
        "Security and Compliance Audit: Conduct a comprehensive security audit to identify vulnerabilities, assess the effectiveness of security controls, and ensure compliance with industry regulations and standards. Provide recommendations for improving security measures, including access controls, encryption, and data protection.",
      description2:
        "User Access and Authentication Audit: Assess user access controls and authentication mechanisms within enterprise applications. Ensure that user permissions align with organizational policies and best practices for least privilege",
      description4:
        "Licensing and Compliance Audit: Review software licenses to ensure compliance with vendor agreements and licensing terms. Identify and address any licensing discrepancies or potential non-compliance issues.",
      li: [
        "Application Security and Compliance Audit",
        "User Access and Authentication Audit",
        "Licensing and Compliance Audit",
      ],
      cardImage:
        "/services/enterpriseapplication/consulting/application security.svg",
    },
    {
      title: "Application Evaluation and Selection",
      heading: "",
      description:
        "Conduct a thorough assessment of business requirements and goals to recommend suitable enterprise applications. Evaluate the available software solutions in the market and provide insights into their features, scalability, and compatibility with organizational needs. Assist in the selection process, considering factors such as cost, scalability, integration capabilities, and long-term viability. Including this service emphasizes the importance of choosing the right enterprise applications that align with the organization's objectives and can be seamlessly integrated into existing systems.",
      description1: "",
      description2: "",
      description3: "",
      cardImage:
        "/services/enterpriseapplication/consulting/application evaluation.svg",
    },
    {
      title: "Data Management",
      heading: "",
      description: "Data Management Audit:",
      description1:
        "Review data management practices, including data storage, retrieval, and backup procedures. Assess data integrity, quality, and adherence to data governance policies.",
      description2: "Disaster Recovery and Business Continuity Audit:",
      description4:
        "Assess the effectiveness of disaster recovery and business continuity plans for enterprise applications. Test the recovery procedures to ensure the organization can quickly resume operations in the event of a disruption",
      li: [
        "Data Management Audit",
        "Disaster Recovery and Business Continuity Audit",
      ],
      cardImage:
        "/services/enterpriseapplication/consulting/data management.svg",
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
