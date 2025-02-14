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
    pageTitle: "IT PROCUREMENT",
    pageDescription:
      "Our team of experts is dedicated to making this process seamless for you. We tailor our services to meet your specific needs, ensuring that you save time, cut costs, and improve overall efficiency.",
    coverImage: "/services/managedservice/procurement/hero.png",
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
      "We understand the unique challenges businesses face in procuring IT hardware and software. Our team of experts is dedicated to making this process seamless for you. We tailor our services to meet your specific needs, ensuring that you save time, cut costs, and improve overall efficiency.",
    title1:
      "Our relationships with top-tier IT vendors mean that you have access to quality products, and we pride ourselves on offering flexible solutions that fits your business requirements.",
    description:
      "What sets us apart is our commitment to transparency. We believe in open communication about our processes, pricing, and any potential hurdles. Our customer support is here to ensure your peace of mind, promptly addressing any questions or concerns you may have. We look forward to the possibility of working together and simplifying your IT procurement journey.",

    description1: "",
    image: "/services/managedservice/procurement/sub hero.png",
    imageAlt: "Managed Services",

    li: [
      "Strategic Consultation",
      "Deployment and Integration",
    ],
    rightLi: [
      "Structured Procurement Process",
    ],
  },
  cardSection: [
    {
      title: "Procurement - Strategic Consultation",
      heading: "",
      description:
        "We strategically collaborate with clients to align IT procurement with their business goals, offering expert guidance in optimizing purchases, ensuring compatibility, and maximizing cost-effectiveness. Our consultation includes advice on the latest technologies, industry trends, and best practices to enhance overall operational efficiency.",
      description1:
        "Needs Assessment: Conduct a thorough assessment of the existing IT infrastructure and identify gaps or areas for improvement. Define the scope of hardware and software required, keeping in mind scalability and future growth.",
      description2:
        "Customized Solutions: Tailor hardware and software solutions to meet the specific needs of each client, considering their industry, size, and growth plans. Develop personalized service packages that align with the client's budget and requirements.",
      description4:
        "Service Catalogue Development: Create a service catalogue that clearly outlines the hardware and software procurement services offered. Define different service levels and options based on the client's needs, such as standard and premium packages.",
      li: [
        "Needs Assessment",
        "Customized Solutions",
        "Service Catalogue Development",
      ],
      cardImage: "/services/managedservice/procurement/1.svg",
    },
    {
      title: "Procurement – Structured Procurement Process",
      heading: "",
      description:
        "A structured IT procurement process ensures cost-effective acquisition of hardware and software, promoting vendor accountability and competitive pricing. It streamlines decision-making, mitigates risks, and enhances overall operational efficiency, fostering a secure and optimized technological environment for the organization.",
      description1:
        "Vendor Management: We Leverage our strong relationships with reputable vendors to secure competitive pricing, favourable terms, and priority access to the latest technologies. On behalf of our clients we handle all interactions with vendors, including negotiations, contract management, and issue resolution.",
      description2:
        "Procurement Process: Develop a standardized and efficient procurement process. Implement a system for clients to request hardware and software. Which includes approval workflows to ensure purchases align with the client's budget and strategy.",
      description4:
        "Lifecycle Management: Provide end-to-end lifecycle management for IT assets, including procurement, deployment, monitoring, maintenance, and eventual decommissioning.",
      li: ["Vendor Management", "Procurement Process", "Lifecycle Management"],
      cardImage: "/services/managedservice/procurement/2.svg",
    },
    {
      title: "Procurement - Deployment and Integration",
      heading: "",
      description:
        "We provide managed deployment services to install and integrate hardware and software seamlessly into the client's environment. Offer training sessions for end-users to maximize the benefits of new technologies.",
      description1:
        "Monitoring and Support: Implement monitoring tools to track the performance of hardware and software. Offer proactive support services, including troubleshooting, updates, and patches.",
      description2:
        "Reporting and Analytics: Provide regular reports to clients on their hardware and software inventory, usage, and performance. Use analytics to identify opportunities for optimisation and cost savings.",
      description4:
        "Continuous Improvement: Regularly review and update the managed services based on client feedback and changing technology trends. Stay abreast of advancements in hardware and software to offer cutting-edge solutions.",
      li: [
        "Monitoring and Support",
        "Reporting and Analytics",
        "Continuous Improvement",
      ],
      cardImage: "/services/managedservice/procurement/3.svg",
    },
    {
      title: "Procurement – Customer Satisfaction",
      heading: "",
      description:
        "We work hard to make sure our customers are happy with our IT procurement services, building trust and loyalty. Reporting and documentation are just as important—they help keep things clear, so our clients understand the value of their investment and we can work together smoothly.",
      description1:
        "Customer Satisfaction and Relationship Management: Establish a strong partnership with clients, fostering open communication and trust. Regularly seek feedback to ensure customer satisfaction and identify areas for improvement.",
      description2:
        "Documentation and Knowledge Transfer: Maintain detailed documentation of configurations, processes, and vendor agreements. Provide knowledge transfer sessions to the client's team to ensure self-sufficiency over time.",
      description3: "",
      li: [
        "Customer Satisfaction and Relationship Management",
        "Documentation and Knowledge Transfer",
      ],
      cardImage: "/services/managedservice/procurement/4.svg",
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
