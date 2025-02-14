import React from "react";
import LevelTwoPageBuilder, { LevelTwoPage } from "./Index";
import icons from "@/components/utils/Icons";

const EAPageData: LevelTwoPage = {
  pageColor: {
    primaryText: "text-red-dark",
    primaryBackground: "bg-red-dark",
    primaryBorder: "border-red-dark",
    HprimaryBackground: "hover:bg-red-dark",
    AprimaryBackground: "active:bg-red-dark",
    primaryShadow: "primary-shadow2",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-red-dark to-red-light",
    // barColor: "bg-gradient-to-r from-white to-red-dark",
  },
  coverSection: {
    pageTitle: "NETWORK",
    pageDescription:
      "Integrated Network Solutions For Seamless Connectivity And Robust Security.",
    coverImage: "/services/network/network-hero.png",
    coverImageAlt: "IT Network Services",
    coverIcon: "/services/network/KCS Network.png",
    coverList: [
      {
        title: "Consulting",
        url: "/enterpriseapplication/consulting",
      },
      {
        title: "Developemnt",
        url: "/enterpriseapplication/developemnt",
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
      "Optimize your business connectivity and security with our comprehensive network integration services, ensuring seamless communication, robust infrastructure, and proactive threat management. Partner with us to transform your network infrastructure into a strategic asset that propels your business towards unprecedented success. Discover the possibilities with [Your Company Name] – where innovation meets connectivity. Our service offerings help with networking strategy, planning, design, implementation, assessment and management. Our services range from network connectivity consulting and integration to managed network services and software-defined networking.",
    description:
      "Our portfolio includes following services for switching, routing, and wi-fi.",
    image: "/services/network/ea-thumb-1",
    imageAlt: "IT Network Services",

    li: [
      "Consulting, Architecture & Design",
      "Optimisation",
      "Microwave and Wi-Fi",
      "Support, NOC & Training",
      "Unified communication",
    ],
  },
  cardSection: [
    {
      title: "CONSULTING ARCHITECTURE & DESIGN",
      heading: "",
      description:
        "Our network consultants help organizations like yours, in adopting, managing and exploiting business applications for desired business outcomes. We start by assessing future readiness of your network, provide a roadmap for digitalisation which includes the underlying network.",
      description1:
        "Our network consultants help organizations like yours, in adopting, managing and exploiting business applications for desired business outcomes. We start by assessing future readiness of your network, provide a roadmap for digitalisation which includes the underlying network. Our network consulting services help ensure we optimize your investments in the current network infrastructure, while guiding you to adopt latest technologies available for modern networks. Futuristic networks should not only support migration to cloud, digital, virtual and remote environments. It needs to support business with decision making in real time using machine learning and artificial intelligence. Thus, unlocking business potential and unleashing business performance. We help you design the appropriate network solution for your business, while supporting you to manage, maintain and exploit the “INFOBHAN” for your business goals and strategy.",
      li: ["Network Consulting", "Network Design", "Network Architecture"],
      cardImage: "/services/network/KCS Network.png",
    },
    {
      title: "MICROWAVE & WIFI",
      heading: "",
      description:
        "Interconnectivity and network redundancy are fast becoming a necessity of modern-day distributed businesses. Modern day business operations demand business communications to be ubiquitous and requisite. It also demands insatiable bandwidth, lighting speed and infallible security. Our services for microwave networks in collaboration with our partners, help your business engineer, build, operate and manage customised solutions as per your needs.",
      description1:
        "Our Wi-Fi services, are essential building blocks in any digital initiative you might be looking at. We partner with you to expand your network capabilities. To support the exploding number of connected devices, users and business partners. Also, to support increasing data consumption of IoT and mobile applications.",
      cardImage: "/services/network/KCS Network.png",
    },
    {
      title: "OPTIMIZATION",
      heading: "",
      description:
        "Our network optimisation services consist of a comprehensive network assessment of your existing inventory and environment. Based on the collated information, we provide you a smart, cost-effective roadmap to upgrade your network that meets your specific business objectives.",
      description1:
        "Our network consultants will work with you and develop a system that considers your operational and strategic objectives. We let you know how to leverage the “INFOBHAN” to bring about agility and proactiveness in your business operations, whilst exploring new business models. A 100Gbps backbone with endpoints connecting at 10Gbps is not in a distant future, but fast becoming a necessity of fully integrated, collaborative business operating in real time basis.",
      cardImage: "/services/network/KCS Network.png",
    },
    {
      title: "SUPPORT & NOC & TRAINING",
      heading: "",
      description:
        "When it comes to your company’s overall network infrastructure, you think of a comprehensive strategic plan for technology transitions, efficient IT process, upgrades and much more. These tasks seem feasible at first, but most companies lack resources and ability to keep pace with ever-evolving technologies. This is where our IT network training and support services help you.",
      description1:
        "Our network engineers can help you become more agile, responsive and connected to increase your organisation’s capabilities. We help you maintain and manage your critical network infrastructure while upskilling your teams with the latest technological developments. KCS academy delivers the framework, roadmap and skills needed to develop, maintain and manage a business communications and networks. Through hands-on instruction, interactive labs and exercises.",
      cardImage: "/services/network/KCS Network.png",
    },
  ],

  enterpriseServices: {
    title:
      "Collaborating with industry leaders, our team of security experts offer a premier-grade, end-to-end service solutions but not limited to",
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
