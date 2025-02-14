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
    pageTitle: "Easiest CRM you can ever work on!",
    pageDescription: "Power of One View for Winning Customer Strategy",
    coverImage: "/services/studio/crm/hero-image-1 2.png",
    coverImageAlt: "Academy Services",
    coverIcon: "/services/academy/KCS Academy.png",
  },
  midSection: {
    titleLeft: "Vtiger CRM | Customer Relationship Management Software",
    descriptionLeft: (
      <>
        <Typography className="mt-2 sm:mt-4">
          Vtiger CRM is a super easy yet powerful Sales CRM software platform
          for all your Sales, Marketing & Support team activities. It is a
          customer relationship management software that helps any business to
          collaborate seamlessly across multiple channels for sure-shot success
          with customers.
        </Typography>

        <Typography
          as={"h4"}
          className="mt-4 sm:mt-4 uppercase"
          color="text-pink-light"
        >
          RELEASE OF V9 HAS GENERATED A LOT OF BUZZ IN THE CRM SPACE.
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
    image: "/services/studio/crm/product2 1.png",
    imageAlt: "Academy Services",

    descriptionRight: (
      <>
        <Typography
          as={"h4"}
          className="mt-4 sm:mt-4 uppercase"
          color="text-pink-light"
        >
          Vtiger CRM Unique Features
        </Typography>
      </>
    ),
    li: [
      "Easiest CRM to use",
      "Single 360 degrees view of your customers",
    ],
    rightLi: [
      "Easy adoption with blazing fast UI",
      "Advance AI that lets you save time",
    ],
  },
  // cardSection: [
  //   {
  //     title: "Sales CRM",
  //     heading: "",
  //     description:
  //       "Get effortless multiple channels lead capturing options. Faster lead assignments to Sales Reps. Lead scoring to prioritize important leads. Timely alerts that make you super attentive. Automated email & SMS campaigns. Schedule meetings, automate tasks & optimise team performance. Sell smarter & faster with Vtiger Sales CRM.",
  //     description1:
  //       "",
  //   },
  //   {
  //     title: "Help Desk Support",
  //     heading: "",
  //     description:
  //       "eceive centralised communication coming from multi-channel support groups. Automate your case creation & assignments. Ensure a quick case resolution. Improve team performance by putting FAQ into the knowledge base & self-service portal. Vtiger Help Desk Support software is easy to use & also provide context-aware solutions.",
  //     description1:
  //       "",
  //   },
  //   {
  //     title: "All-In-One",
  //     heading: "",
  //     description:
  //       "Get a real-time one-stop solution that communicates flawlessly without the need of any integration among different modules. Amazed? Well, it offers more than that. Vtiger One is an all-in-one CRM that can foster your brand loyalty & customer engagement. Make intelligent decisions with this Sales CRM to sell faster & smarter.",
  //     description1:
  //       "",
  //   },
  //   {
  //     title: "Integrations",
  //     heading: "",
  //     description:
  //       "Vtiger One is a very flexible and convenient CRM that allows integration to over 500+ third-party business applications. Now, design & develop more powerful Sales CRM with external integrations such as Telephony app, SMS app, a Payment app, File Storage app, eCommerce app & chat app, etc.",
  //     description1:
  //       "",
  //   },
  //   {
  //     title: "Warehouse management",
  //     heading: "",
  //     description:
  //       "The SAP Warehouse Management system (WMS) provides flexible, automated support in processing all goods movements and in managing stocks in a warehouse complex. The system supports scheduled and efficient processing of all logistics processes within the warehouse.",
  //     description1:
  //       "",
  //   },
  //   {
  //     title: "Customer relationship management",
  //     heading: "",
  //     description:
  //       "SAP provides a customer relationship management system that allows CRM professionals to automate and integrate every customer activity, including sales, marketing, customer service and commerce.",
  //     description1:
  //       "",
  //   },
  // ],

  SectionTabs: {
    "Sales CRM": {
      title: "Sales CRM",
      description: (
        <div className=" space-y-4">
          <h4 className="text-left text-xl font-semibold text-white leading-relaxed">
          
          </h4>
          <p className="text-white">
          Get effortless multiple channels lead capturing options. Faster lead assignments to Sales Reps. Lead scoring to prioritize important leads. Timely alerts that make you super attentive. Automated email & SMS campaigns. Schedule meetings, automate tasks & optimise team performance. Sell smarter & faster with Vtiger Sales CRM.
          </p>
          <p className="text-white">
          
          </p>
        </div>
      ),
    },
    "Help Desk Support": {
      title: "Help Desk Support",
      description: (
        <div className=" space-y-4">
          <h4 className="text-left text-xl font-semibold text-white leading-relaxed">
          
          </h4>
          <p className="text-white">
          Receive centralised communication coming from multi-channel support groups. Automate your case creation & assignments. Ensure a quick case resolution. Improve team performance by putting FAQ into the knowledge base & self-service portal. Vtiger Help Desk Support software is easy to use & also provide context-aware solutions.
          </p>
        </div>
      ),
    },
    "All-In-One": {
      title: "All-In-One",
      description: (
            <div className=" space-y-4">
            <p className="text-white">
            Get a real-time one-stop solution that communicates flawlessly without the need of any integration among different modules. Amazed? Well, it offers more than that. Vtiger One is an all-in-one CRM that can foster your brand loyalty & customer engagement. Make intelligent decisions with this Sales CRM to sell faster & smarter.
          </p>
        </div>
      ),
    },
    "Integrations": {
      title: "Integrations",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          Vtiger One is a very flexible and convenient CRM that allows integration to over 500+ third-party business applications. Now, design & develop more powerful Sales CRM with external integrations such as Telephony app, SMS app, a Payment app, File Storage app, eCommerce app & chat app, etc.
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
  },

  videoSection: {
    title:
      "Do you need a reliable Vtiger CRM solution provider to automate your Customer Relationship Management Services? Let;s talk!",
    image: "/services/studio/crm/vtiger.png",
    imageAlt: "Academy Services",
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
