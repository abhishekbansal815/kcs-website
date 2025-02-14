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
    pageTitle: "World Leading Hospitality Point of Sale",
    pageDescription: "Simphony helps F&B operations deliver superb service through an integrated platform. Its flexible, powerful, customisable and affordable with monthly pricing plans. It can fit the unique needs of single-location restaurants and global enterprise chains across 180 countries.",
    coverImage: "/services/studio/hospitality/pos6a 1.png",
    coverImageAlt: "Hospitality Products",
    coverIcon: "/services/academy/KCS Academy.png",
  },
  midSection: {
    titleLeft: "Oracle - Simphony",
    descriptionLeft: (
      <>
        <Typography className="mt-2 sm:mt-4">
        The Simphony POS system from Oracle is built for complete restaurant management. Simphony powers the most successful food and beverage venues across the globe, from local cafés and iconic fine dining restaurants to global quick-service chains, stadiums, and theme parks. As an all-in-one cloud POS platform, it helps restaurateurs optimize their online and in-house operations in real time from any device.
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
    image: "/services/studio/hospitality/pos 7.png",
    imageAlt: "Hospitality Products",

    descriptionRight: (
      <>
        <Typography
          as={"h4"}
          className="mt-4 sm:mt-4 uppercase"
          color="text-pink-light"
        >
          Online Ordering and Delivery.
        </Typography>
      </>
    ),
    li: [
      "Online Ordering and Delivery",
      "Conversational Ordering",
      "Real-Time Table Management",
      "Reservations and Wait Lists",
      "Custom Look and Language Support",
      "Self-Service Kiosks",

    ],
    rightLi: [
      "Multichannel Kitchen Displays",
      "Integrations Ecosystem",
      "Reporting and Analytics",
      "Inventory Management",
      "Gift and Loyalty Programs",
    ],
  },
  SectionTabs: {
    "Online Ordering and Delivery": {
      title: "Online Ordering and Delivery",
      description: (
        <div className=" space-y-4">
          <h4 className="text-left text-xl font-semibold text-white leading-relaxed">
          
          </h4>
          <p className="text-white">
          Simphony brings your menu and payment processing online. Update menu items and take orders from your website or branded mobile app and send them directly to your restaurant or cloud kitchen. Alert your customers when their orders are ready for curbside pickup or are on their way for delivery.
          </p>
          <p className="text-white">
          
          </p>
        </div>
      ),
    },
    "Conversational Ordering": {
      title: "Conversational Ordering",
      description: (
        <div className=" space-y-4">
          <h4 className="text-left text-xl font-semibold text-white leading-relaxed">
          
          </h4>
          <p className="text-white">
          Simphony conversational ordering screen allows orders to be taken the way they are spoken without interrupting the customer. It also encourages cross and upselling while providing the flexibility to change orders on the fly.
          </p>
        </div>
      ),
    },
    "Real-Time Table Management": {
      title: "Real-Time Table Management",
      description: (
            <div className=" space-y-4">
            <p className="text-white">
            Simphony friendly and customizable table management screen improves efficiency and customer service while helping to turn tables and reach revenue goals. It gives servers the ability to see the stage of each dining experience and the amount of time guests have been at each table. Simphony also delivers service alerts to help staff be more attentive to each guest.
          </p>
        </div>
      ),
    },
    "Reservations and Wait Lists": {
      title: "Reservations and Wait Lists",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          The reservation list allows hosting staff to manage all reservation requests quickly and easily. If a restaurant uses future reservations or multiple dining room layouts, a tabbed template provides staff with an easy way to navigate between wait lists, reservation lists, and table layouts.
          </p>
        </div>
      ),
    },
    "Integrations Ecosystem": {
      title: "Integrations Ecosystem",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          Simphony is built on a secure and open API running on your choice of Microsoft Windows or Oracle Linux. Easily connect your favorite online ordering platforms, delivery services, mobile payment processing, and more.
          </p>
        </div>
      ),
    },
    "Reporting and Analytics": {
      title: "Reporting and Analytics",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          Simphony includes a complete reporting and analytics suite. Prebuilt dashboards provide insights on trends, forecasts, and opportunities from a desktop web browser or in the InMotion mobile app.
          </p>
        </div>
      ),
    },
    "Inventory Management": {
      title: "Inventory Management",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          Simphony restaurant inventory management tools help you minimize waste by maintaining optimal stock levels. By using real-time forecasting data, it optimizes order timing. It also shows what you should have on the shelf, helping to prevent over-portioning, waste, and theft.
          </p>
        </div>
      ),
    },
    "Gift and Loyalty Programs": {
      title: "Gift and Loyalty Programs",
      description: (
        <div className=" space-y-4">
          <p className="text-white">
          Simphony gives you the tools to keep your customers coming back. Easily manage gifts and awards based on visit frequency, amount spent, and items purchased. Allow your customers to view their reward activity in real time and engage with them through targeted, data-driven marketing campaigns to boost your overall customer satisfaction.
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
