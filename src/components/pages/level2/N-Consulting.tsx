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
    pageTitle: "NETWORK DESIGN & CONSULTING",
    pageDescription:
      "Our Network Consulting, Architecture, and Design services are tailored to empower organizations like yours in adopting, managing, and leveraging business applications for optimal business outcomes.",
    coverImage: "/services/network/consulting/Networkconsultinghero.png",
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
      "We understand the critical role that a robust network infrastructure plays in the success of your business. Our Network Consulting, Architecture, and Design services are tailored to empower organizations like yours in adopting, managing, and leveraging business applications for optimal business outcomes. Our comprehensive approach encompasses assessing the future readiness of your network, providing a roadmap for digitalization, and optimizing your network infrastructure investments.",
    title1:
      "Digitalisation Roadmap, Adoption of latest technologies, network Design",
    description:
      "These services are crucial for ensuring that different systems and technologies work together seamlessly to meet the organization's objectives.",

    description1: "",
    image: "/services/network/consulting/subhero.png",
    imageAlt: "IT Network Services",

    li: [
      "Custom Network Design",
      "Futuristic Scalability Planning",
      "Network Integration",
    ],
    rightLi: [
      "Hardware and Software Integration",
      "Strategic Digital Transformation",
      "Technology Alignment",
    ],
  },
  cardSection: [
    {
      title: "Network Consulting - Assessment and Future Readiness",
      heading: "",
      description:
        "In our Network Assessment and Future Readiness service, we meticulously analyse your current network infrastructure to pinpoint strengths, weaknesses, and areas for enhancement. Through thorough performance evaluations, security audits, and scalability analyses, we provide a comprehensive overview. Our experts also delve into emerging technologies and industry benchmarks, ensuring your network aligns with the latest trends.",
      description1:
        "Key Components: Current Network Analysis: Evaluate structure, performance, and security. Capacity Planning: Assess bandwidth, scalability, and potential bottlenecks. Technology Trends: Identify emerging technologies and industry benchmarks.",
      description2:
        "Process: Initiation: Define objectives and scope in collaboration with key stakeholders. Data Collection: Gather information on configurations, devices, and usage patterns. Analysis: Utilize advanced tools to identify areas for improvement and potential risks. Reporting: Present a detailed assessment report with actionable recommendations. Roadmap: Develop a phased plan for future-proofing the network aligned with strategic goals.",
      description4:
        "Benefits: Informed Decision-Making: Insightful analysis for informed decision-making. Risk Mitigation: Address potential security risks and vulnerabilities proactively. Scalability Assurance: Ensure your network accommodates future growth seamlessly. Strategic Alignment: Align your network with industry trends and organizational goals.",
      cardImage: "/services/network/consulting/1.svg",
    },
    {
      title: "Network Consulting – Design and Architecture",
      heading: "",
      description:
        "Our Network Consulting services in Design and Architecture are crafted to empower organizations in optimizing their network infrastructure, adopting the latest technologies, and achieving future-ready connectivity.",
      description1:
        "Strategic Network Design: Crafting high-performance architectures meeting stringent performance, security, and scalability requirements. Tailoring designs to align seamlessly with business objectives.",
      description2:
        "Technology Integration: Expert selection and integration of hardware and software components. Ensuring interoperability for a cohesive and efficient network ecosystem.",
      description4:
        "Futuristic Network Architecture: Scalable frameworks designed for future scalability and growth. Strategic planning for seamless migration pathways to accommodate evolving business requirements.",
      li: [
        "Custom Network Design",
        "Hardware and Software Integration",
        "Futuristic Scalability Planning",
      ],
      cardImage: "/services/network/consulting/2.svg",
    },
    {
      title: "Network Consulting – Digitalization Roadmap",
      heading: "",
      description:
        "In our Network Consulting services, we specialize in crafting a strategic Digitalization Roadmap to propel your organization into the future. This service offering is designed to seamlessly integrate your network into the digital landscape, ensuring it becomes a strategic enabler of business goals and objectives.",
      description1:
        "Digital Maturity Assessment: Evaluate the current state of digital readiness within the organization. Identify areas for improvement and advancement. Strategic Roadmap Development: Craft a detailed roadmap for digital transformation aligned with business objectives. Define milestones and key performance indicators (KPIs) for measuring progress",
      description2:
        "Network Integration Planning: Ensure the underlying network is seamlessly integrated into the digitalization process. Prioritize enhancements and adjustments to support digital initiatives.",
      description4:
        "Technology Adoption: Identify and recommend technologies that enhance digital capabilities. Facilitate the adoption of cloud, virtualization, and remote environments.",
      li: [
        "Strategic Digital Transformation",
        "Network Integration",
        "Technology Alignment",
      ],
      cardImage: "/services/network/consulting/3.svg",
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
