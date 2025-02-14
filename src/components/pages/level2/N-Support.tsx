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
    pageTitle: "MANAGED NETWROK & SUPPORT",
    pageDescription:
      "We offer support options based on your needs and requirements. From NOC, SOC, SEIM to basic Essential 8 compliance we offer diverse managed Network solutions to cover all types and size of businesses.",
    coverImage: "/services/network/support/support hero.png",
    coverImageAlt: "IT Network Services",
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
      "Network managed services encompass a range of services aimed at efficiently managing and maintaining an organization's network infrastructure. These services are often outsourced to specialised providers like us to ensure optimal network performance, security, and reliability. The specific offerings can vary but here are some common services included in network managed services",
    title1: "Network monitoring, Network security, Training",
    description:
      "These services collectively aim to ensure that an organization's network is secure, efficient, and aligned with business goals. Outsourcing network management allows businesses to focus on their core activities while relying on experts to maintain a robust and reliable network infrastructure",

    description1:
      "Depending on the specific needs of a client, a combination of these services may be offered as part of a comprehensive network managed services portfolio.",
    image: "/services/network/support/sub hero.png",
    imageAlt: "IT Network Services",

    li: [
      "Network Monitoring",
      "Network Troubleshooting and Support",
      "NOC (Network Operations Centre)",
      "SIEM (Security Information and Event Management)",
    ],
    rightLi: [
      "Network Configuration and Management",
      "Network Security",
      "SOC (Security Operations Centre)",
      "vCISO (Virtual Chief Information Security Officer)",
    ],
  },
  cardSection: [
    {
      title: "Network Monitoring",
      heading: "",
      description:
        "Continuous tracking and analysis of network performance, devices, and traffic to identify issues and ensure optimal functionality. We provide network monitoring using advanced tools to detect anomalies, unauthorized access, and performance bottlenecks. Alerts are generated in real-time, allowing proactive issue resolution",
      description1: "",
      description2: "",
      description3: "",

      cardImage: "/services/network/support/1.svg",
    },
    {
      title: "Network Configuration and Management",
      heading: "",
      description:
        "Configuration, optimization, and management of network devices to ensure proper functioning and alignment with business requirements. We oversee the configuration of routers and switches, implements Quality of Service (QoS) policies for traffic prioritization, and conducts regular audits to ensure configurations align with security best practices.",
      description1: "",
      description2: "",
      description3: "",

      cardImage: "/services/network/support/2.svg",
    },
    {
      title: "Network Troubleshooting and Support",
      heading: "",
      description:
        "Rapid identification and resolution of network issues, along with ongoing support to address user concerns or technical problems. We provide dedicated network management helpdesk to address user-reported network issues promptly. We use advanced diagnostic tools for efficient troubleshooting and follow established incident management processes.",
      description1: "",
      description2: "",
      description3: "",

      cardImage: "/services/network/support/3.svg",
    },
    {
      title: "Performance Optimization",
      heading: "",
      description:
        "Activities aimed at maximizing network efficiency, including bandwidth management, traffic analysis, and performance tuning. Our dedicated network engineers analyses network traffic patterns, identifies bandwidth-intensive applications, and implements policies for efficient bandwidth usage. They continuously monitor and optimize network performance to ensure smooth operations.",
      description1: "",
      description2: "",
      description3: "",

      cardImage: "/services/network/support/4.svg",
    },
    {
      title: "Network Security",
      heading: "",
      description:
        "Monitoring laid down measures to protect the network from unauthorized access, cyber threats, and data breaches. We help maintain and manage firewalls, intrusion detection/prevention systems, and conducts regular security audits. We assist with deployment and management of VPNs to secure remote access, ensuring a robust defence against cyber threats.",
      description1: "",
      description2: "",
      description3: "",

      cardImage: "/services/network/support/5.svg",
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
