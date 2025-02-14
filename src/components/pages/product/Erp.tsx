import React from "react";
import { LevelOnePage } from "./Index";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import ProductPageBuilder from "./Index";

// Example usage:
const data: LevelOnePage = {
  pageColor: {
    primaryText: "text-pink-light",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-pink-light to-gradiant-security-start",
    primaryBackground: "bg-pink-light",
    primaryBorder: "border-pink-light",
    // barColor: "bg-gradient-to-r from-white to-pink-light",
  },

  coverSection: {
    pageTitle: "Best Run Businesses, Run SAP",
    pageDescription: "SAP is the most popular ERP SOFTWARE run by the best businesses in the world, and it supports a wide range of business processes in popular industries, that use the rich set of modules offered by SAP in gaining competitive advantage.",
    coverImage: "/services/studio/erp/sap1.png",
    coverImageAlt: "ERP Products",
    coverIcon: "/services/academy/KCS Academy.png",
  },
  midSection: {
    titleLeft: "SAP servicesSystem Application and Products in Data Processing",
    descriptionLeft: (
      <>
        <Typography className="mt-2 sm:mt-4">
        SAP, or Systems Applications and Products, is a widely used enterprise resource planning (ERP) software that creates a centralized system for businesses and enables every department to access and share common data to create a better work environment for every employee in the company.
        </Typography>
        <Button className={`my-6 rounded-full bg-pink-light`}>
          <Typography
            as="span"
            className="font-bold uppercase"
            color="text-white"
          >
            Talk To Our Consultant
          </Typography>
        </Button>
      </>
    ),
    image: "/services/studio/erp/ERP2-1 1.png",
    imageAlt: "ERP Products",

    descriptionRight: (
      <>
        <Typography
          as={"h4"}
          className="mt-4 sm:mt-4 uppercase"
          color="text-pink-light"
        >
          SAP features
        </Typography>
      </>
    ),
    li: [
      "Executing business transactions",
      "Business Reporting",
      "Finance and Accounting",
    ],
    rightLi: [
      "Enterprise management",
      "Tightly integrated modules",
    ],
  },

  SectionTabs: {
    "Sales and Distribution (SD)": {
      title: "Sales and Distribution (SD)",
      description: (
        <div className=" space-y-4">
          <h4 className="text-left text-xl font-semibold text-white leading-relaxed">
          
          </h4>
          <p className="text-white">
          SAP Sales and Distribution (SD) is a core functional module in SAP Consistant S4 that is capable of storing and processing customer and product related data. Organizations utilise this data to manage all the processes like sales ordering, billing, shipping and invoicing of goods and services.
          </p>
          <p className="text-white">
          
          </p>
        </div>
      ),
    },
    "SAP Material Management": {
      title: "SAP Material Management",
      description: (
        <div className=" space-y-4">
          <h4 className="text-left text-xl font-semibold text-white leading-relaxed">
          
          </h4>
          <p className="text-white">
          SAP MM is a part of logistics functions, and it helps in managing the procurement activities of an organization. It supports all aspects of material management like planning, control etc. It is the backbone of logistics that incorporates modules such as Sales and Distribution, Production Planning, Plant Maintenance, Project Systems, and Warehouse Management.
          </p>
        </div>
      ),
    },
    "Human Resources Management": {
      title: "Human Resources Management",
      description: (
            <div className=" space-y-4">
            <p className="text-white">
            The SAP HR software offers businesses and industries automation, standardization, streamlining and increased control over cost and legal compliance. The SAP HR software suite has several modules, such as core HR and Payroll, workforce planning and analysis, talent management, mobile HR solutions, HR for small and medium enterprises and cloud-computing for Internet-based management and it integrates of all HR software modules.
          </p>
        </div>
      ),
    },
    "Project Management": {
      title: "Project Management",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          SAP Project System (PS) is a project management software tool that integrates with other components of the SAP Enterprise Resource Planning (SAP ERP) system. The tool is an on-premises functional module, or component, of the SAP ERP system and allows users to direct funds and resources where needed and control each stage of the project to ensure punctual delivery within budget.
          </p>
        </div>
      ),
    },
    "Warehouse Management": {
      title: "Warehouse Management",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          The SAP Warehouse Management system (WMS) provides flexible, automated support in processing all goods movements and in managing stocks in a warehouse complex. The system supports scheduled and efficient processing of all logistics processes within the warehouse.
          </p>
        </div>
      ),
    },
    "Customer Relationship Management": {
      title: "Customer Relationship Management",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          SAP provides a customer relationship management system that allows CRM professionals to automate and integrate every customer activity, including sales, marketing, customer service and commerce.
          </p>
        </div>
      ),
    },
    "Finance management and accounting": {
      title: "Finance Management and Accounting",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          SAP provides a comprehensive suite of financial management and accounting systems that give companies the tools they need to keep track of their finances. It is one of important modules of SAP ERP. It is used to store the financial data of an organization. SAP FI helps to analyze the financial conditions of a company in the market. It can integrate with other SAP modules like SAP SD, SAP PP, SAP MM, SAP SCM, etc.
          </p>
        </div>
      ),
    },
    "SAP Internet of Things": {
      title: "SAP Internet of Things",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          As part of SAP Business Technology Platform, the SAP IoT solution helps users reimagine business processes and models with embedded IoT services and data.
          </p>
        </div>
      ),
    },
    "SAP Fiori": {
      title: "SAP Fiori",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          SAP Fiori is a modern UX for every device and user that equips designers and developers with a set of tools and guidelines to create apps with a consistent, innovative experience for any platform. Turn new ideas into great apps as quickly as your customers and users demand.
          </p>
        </div>
      ),
    },
    "BW(Business Warehouse)": {
      title: "BW(Business Warehouse)",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          Empower your people to uncover and act on real-time insights with our AI-powered business intelligence (BI) and analytics tools. Analyse past and present situations – and simulate and prepare for the future.
          </p>
        </div>
      ),
    },
  },

  videoSection: {
    title:
      "Do you need a reliable SAP ERP solution provider to automate your Business processes & Management Services? Let’s talk!",
    image: "/services/studio/erp/Group 2836.png",
    imageAlt: "ERP Product",
  },

  enterpriseServices: {
    title: "",
    leftServices: [
      { id: 1, name: "" },
      { id: 2, name: "" },
      { id: 3, name: "" },
      { id: 4, name: "" },
      { id: 5, name: "" },
      { id: 6, name: "" },
    ],

    rightServices: [
      { id: 7, name: "" },
      { id: 8, name: "" },
      { id: 9, name: "" },
      { id: 10, name: "" },
      { id: 11, name: "" },
      { id: 12, name: "" },
    ],
  },
};

// Then use it like:

const Crm = () => {
  return <ProductPageBuilder pageData={data} />;
};

export default Crm;
