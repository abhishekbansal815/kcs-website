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
    pageTitle: "NETWORK IMPLEMENTATION",
    pageDescription:
      "Our implementation services are designed to empower businesses with a network infrastructure that not only meets their immediate needs but also lays the groundwork for future growth and technological advancements.",
    coverImage: "/services/network/Implementation/Implementation.png",
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
      "The deployment phase involves the skilful implementation of both wired and wireless network components, ensuring not only connectivity but also security and scalability. Emphasis is placed on network security, with the integration of robust measures such as firewalls and intrusion detection systems. Quality of Service (QoS) configurations are meticulously tuned to prioritize critical traffic, optimizing the network's overall performance.",
    title1:
      "Infrastructure Deployment, Quality of Service (QoS), Compliance and Regulatory Assistance",
    description:
      "Ultimately, these implementation services are designed to empower businesses with a network infrastructure that not only meets their immediate needs but also lays the groundwork for future growth and technological advancements.",

    description1:
      "Following services, we offer help you manage security for our on-premise assets",
    image: "/services/network/Implementation/sub.png",
    imageAlt: "IT Network Services",

    li: [
      "Infrastructure Deployment",
      "Wired and Wireless Network Implementation",
      "Network Security Implementation",
      "Quality of Service (QoS) Implementation",
      "Network Optimization",
    ],
    rightLi: [
      "Cloud Integration",
      "Compliance and Regulatory Assistance",
      "Disaster Recovery Planning",
      "Network Documentation",
    ],
  },
  cardSection: [
    {
      title: "Network Implementation – Infrastructure Deployment",
      heading: "",
      description:
        "Deploying network hardware and software components, such as routers, switches, firewalls, and servers. Configuring devices to meet security, performance, and reliability standards.",
      description1:
        "Deploying wired and wireless network infrastructure to support seamless connectivity. Optimizing the placement of access points, routers, and switches to ensure coverage and performance.",
      description2:
        "Implementing security measures, including firewalls, intrusion detection/prevention systems, and VPNs, to protect against cyber threats.",
      description3: "",
      li: [
        "Infrastructure Deployment",
        "Wired and Wireless Network Implementation",
        "Network Security Implementation",
      ],
      cardImage: "/services/network/Implementation/1.svg",
    },
    {
      title: "Network Implementation – QoS and cloud migration",
      heading: "",
      description:
        "The tasks involve implementing Quality of Service (QoS) policies to prioritize critical applications, monitoring and adjusting parameters for optimal performance; optimizing network efficiency by tuning performance, resolving bottlenecks, and addressing latency. These measures collectively ensure a high-performing, secure, and integrated network infrastructure.",
      description1:
        "Quality of Service (QoS) Implementation: Configuring QoS policies to prioritize network traffic and ensure optimal performance for critical applications. Monitoring and adjusting QoS parameters to maintain service levels.",
      description2:
        "Network Optimization: Conducting performance tuning to enhance the overall efficiency and responsiveness of the network. Identifying and resolving bottlenecks, latency issues, and other performance challenges.",
      description4:
        "Cloud Integration: Integrating on-premises networks with cloud services to create a hybrid or multi-cloud environment. Ensuring secure and efficient communication between on-premises and cloud resources.",
      li: [
        "Quality of Service (QoS) Implementation",
        "Network Optimization",
        "Cloud Integration",
      ],
      cardImage: "/services/network/Implementation/2.svg",
    },
    {
      title: "Network Implementation – Disaster recovery planning",
      heading: "",
      description:
        "Disaster recovery planning, involving the development and implementation of procedures for network infrastructure, as well as testing their effectiveness. Additionally, they provide compliance and regulatory assistance by ensuring adherence to industry standards.",
      description1:
        "Disaster Recovery Planning: Developing and implementing disaster recovery plans for the network infrastructure. Testing and validating the effectiveness of disaster recovery procedures.",
      description2:
        "Compliance and Regulatory Assistance: Ensuring that the network architecture and configurations comply with industry regulations and standards. Assisting with audits and documentation to meet compliance requirements.",
      description4:
        "Network Documentation: Creating comprehensive documentation of the network architecture, configurations, and policies. Providing training to IT staff on maintaining and troubleshooting the network.",
      li: [
        "Disaster Recovery Planning",
        "Compliance and Regulatory Assistance",
        "Network Documentation",
      ],
      cardImage: "/services/network/Implementation/3.svg",
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
