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
    pageTitle: "MANAGED INFRASTRUCTURE",
    pageDescription:
      "As IT experts, we make sure the technology we implement fits perfectly with your business goals. We handle project management and quality assurance to avoid any problems with complex setups.",
    coverImage: "/services/managedservice/Infrastructure/hero.png",
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
      "As IT experts, we make sure the technology we implement fits perfectly with your business goals. We handle project management and quality assurance to avoid any problems with complex setups. Our expertise, proven success, and cost-effective methods contribute to making your infrastructure more reliable.",
    title1:
      "Expertise and Experience, Efficiency and Cost-Effectiveness, Customization and Scalability, Risk Mitigation",
    description:
      "We specialise in managing infrastructure solutions to streamline and boost the technical performance of your organization's IT setup. Our goal is to optimize efficiency, reliability, and scalability, ensuring smooth day-to-day operations for your business.",

    description2:
      "By leveraging cutting-edge technologies, we provide a valuable partnership to establish and uphold a secure, efficient, and scalable IT infrastructure. This enables businesses to stay ahead in the ever-evolving industry landscape, allowing you to concentrate on strategic initiatives with confidence.",
    image: "/services/managedservice/Infrastructure/sub hero.png",
    imageAlt: "Managed Services",

    li: [
      "Infrastructure Customized Solutions",
      "Data Storage and Management",
    ],
    rightLi: [
      "Technology Assessment",
      "Training and Support",
    ],
  },
  cardSection: [
    {
      title: "Managed Services – Infrastructure Customized Solutions",
      heading: "",
      description:
        "At Katalyst consulting services we can design and implement customized infrastructure solutions tailored to the specific needs and scale of various organisations. This may include network solutions, storage systems, and on-prem or cloud server configurations.",
      description1:
        "Server Virtualization: Implementing server virtualization solutions allows businesses to run multiple virtual servers on a single physical server. This can lead to better resource utilization, increased flexibility, and cost savings.",
      description2:
        "Storage Solutions: We can design and deploy storage solutions that provide scalable, high-performance storage for business data. This includes network-attached storage (NAS) and storage area network (SAN) solutions. Hyper Converged Infrastructure (HCI) solutions.",
      description4:
        "Cloud infrastructure: Support for virtualised computing resources, including servers, storage, networks, and services, that are hosted and delivered over the internet by cloud service providers. It allows users to access and manage computing resources on-demand without the need for physical hardware.",
      li: [
        "Server Virtualization",
        "Storage Solutions",
        "Cloud Infrastructure",
      ],
      cardImage: "/services/managedservice/Infrastructure/1.svg",
    },
    {
      title: "Managed Services - Technology Assessment",
      heading: "",
      description:
        "Businesses may not have the expertise to navigate the rapidly evolving technology landscape. Katalyst consulting services can assess the current technology infrastructure of an organisation, identify weaknesses or areas for improvement, and recommend appropriate technologies. Cost-effective Solutions: We can help you optimize your IT infrastructure costs by recommending cost-effective technologies and strategies. This includes virtualization, cloud services, and efficient hardware solutions. This may include servers, storage devices, and networking equipment.",
      description1:
        "Scalability: As your business grows, the IT infrastructure needs to evolve as well. We can design scalable solutions that allow for easy expansion and upgrades, ensuring that the infrastructure can accommodate future business growth.",
      description2:
        "Hardware Integration: We can help choose and integrate the right hardware, such as computers, laptops, printers, and scanners, based on your specific business needs. This ensures that employees have access to reliable and efficient devices that support their tasks.",
      description4:
        "Cloud Integration: Leveraging cloud services can enhance business productivity by providing scalable and flexible infrastructure resources. We can assist in integrating on-premises infrastructure with cloud services, facilitating data access and collaboration.",
      li: [
        "Cost-effective Solutions",
        "Scalability",
        "Hardware Integration",
        "Cloud Integration",
      ],
      cardImage: "/services/managedservice/Infrastructure/2.svg",
    },
    {
      title: "Managed Services - Data Storage and Management",
      heading: "",
      description:
        "We assist with design, implementation and support of storage solutions that would meet the data storage and retrieval requirements of your business. This includes recommending appropriate storage technologies and data management strategies.",
      description1:
        "Data Backup and Recovery: Implementing reliable data backup and recovery solutions is essential for business of all sizes. We can design and implement backup strategies to protect critical business data and ensure quick recovery in case of data loss or system failures.",
      description2:
        "Business Continuity: Establishing robust backup and disaster recovery solutions is essential for business continuity. We can implement automated backup processes and recovery plans to minimize downtime in case of data loss or system failures.",
      description4:
        "Compliance and Regulations: Our infrastructure managed services can help you navigate and comply with industry-specific regulations and standards, ensuring that the IT infrastructure meets legal requirements and security standards.",
      li: [
        "Data Backup and Recovery",
        "Business Continuity",
        "Compliance and Regulations",
      ],
      cardImage: "/services/managedservice/Infrastructure/3.svg",
    },
    {
      title: "Managed Services- Training and Support",
      heading: "",
      description:
        "Most organisations may lack the in-house expertise to manage and maintain their IT infrastructure. Katalyst consulting services can provide training for staff and ongoing support to ensure that the infrastructure functions smoothly and efficiently.",
      description1:
        "End-User Support Systems: We Implement systems that facilitate end-user support, such as helpdesk solutions and remote assistance tools. This ensures that employees can quickly get assistance when facing technical issues.",
      description2: "",
      description3: "",
      cardImage: "/services/managedservice/Infrastructure/4.svg",
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
