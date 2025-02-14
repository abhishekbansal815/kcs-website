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
    pageTitle: "ENTERPRISE APPLICATION - CI/CD",
    pageDescription:
      "By defining and delivering continuous improvements we help organizations maintain the health and functionality of their enterprise applications, allowing them to focus on core business activities while leveraging technology effectively.",
    coverImage:
      "/services/enterpriseapplication/development/development-hero-img.png",
    coverImageAlt: "IT enterpriseapplication Services",
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
      "Implement a continuous improvement framework to assess and enhance the efficiency and effectiveness of enterprise application systems over time. Our framework for CI/CD solicits feedback from users and stakeholders to identify areas for improvement. By defining and delivering continuous improvements we help organizations maintain the health and functionality of their enterprise applications, allowing them to focus on core business activities while leveraging technology effectively.",
    title1: "Enterprise application development services",
    description:
      "These services involve the creation, customization, and enhancement of software applications to meet the specific needs of an organization. Here are some common development services offered by Katalyst consulting services in the enterprise application domain:",

    description1: "",
    image: "/services/enterpriseapplication/ea-thumb-1.png",
    imageAlt: "IT enterpriseapplication Services",

    li: [
      "Custom Application Development",
      "Web Application Development",
      "DevOps and Continuous Integration/Continuous Deployment (CI/CD)",
    ],

    rightLi: [
      "Application Modernisation",
      "Portal Development",
    ],
  },
  cardSection: [
    {
      title: "Custom Application Development",
      heading: "",
      description:
        "Design and develop bespoke software solutions tailored to the unique requirements of the client. Use modern development frameworks and methodologies to create scalable and maintainable applications. Mobile Application Development: Develop mobile applications for iOS, Android, or cross-platform environments to extend the reach of enterprise solutions. Ensure mobile applications integrate seamlessly with existing enterprise systems. Web Application Development: Design and build web-based applications that can be accessed through browsers, ensuring a user-friendly and accessible interface. Implement responsive design for optimal performance across various devices. Portal Development: Create intranet or extranet portals to facilitate collaboration, information sharing, and communication within the organization or with external stakeholders. Develop customer portals for improved interaction and service delivery.",
      description1: "",
      description2: "",
      description3: "",
      li: [
        "Mobile Application Development",
        "Web Application Development",
        "Portal Development",
      ],
      cardImage:
        "/services/enterpriseapplication/development/application development.svg",
    },
    {
      title: "Application Modernization",
      heading: "",
      description:
        "Upgrade and modernize legacy applications to improve functionality, user experience, and compatibility with current technologies. Migrate monolithic applications to microservices architecture for increased agility.",
      description1:
        "E-commerce Solutions: Build and customize e-commerce platforms to support online sales and transactions. Integrate e-commerce systems with inventory management, payment gateways, and customer relationship management (CRM) systems.",
      description2:
        "Enterprise Resource Planning (ERP) Customization: Customize and extend functionality within ERP systems to align with specific business processes. Integrate ERP modules with other enterprise applications for seamless data exchange.",
      description3: "",
      li: [
        "E-commerce Solutions",
        "Enterprise Resource Planning (ERP) Customization",
      ],
      cardImage:
        "/services/enterpriseapplication/development/application modernization.svg",
    },
    {
      title: "DevOps and Continuous Integration/Continuous Deployment (CI/CD)",
      heading: "",
      description:
        "Implement DevOps practices to streamline collaboration between development and operations teams. Establish CI/CD pipelines to automate the testing and deployment of application updates. These development services complement the broader system integration and consulting offerings, allowing organizations to have end-to-end support, from initial application design to ongoing development and maintenance.",
      description1:
        "Quality Assurance and Testing: Conduct comprehensive testing, including functional testing, performance testing, and security testing, to ensure the reliability of developed applications. Implement automated testing processes for continuous quality assurance.",
      description2:
        "Code and Configuration Audit: Conduct a code review to identify security vulnerabilities, coding standards adherence, and maintainability of the codebase. Review configuration settings to ensure optimal performance and security.",
      description3: "",
      li: ["Quality Assurance and Testing", "Code and Configuration Audit"],
      cardImage: "/services/enterpriseapplication/development/devops.svg",
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
