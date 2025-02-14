"use client";

import React, { useEffect, useContext } from "react";
import CommonHeader from "@/components/ui/CommonHeader";
import Typography from "@/components/ui/Typography";
import Image from "next/image";
import PrimaryTab from "@/components/ui/tabs/PrimaryTab-Product";
// import Engagement from "../homepage/Engagement";
// import OurProduct from "../homepage/Index-slider and our product";
// import PartnerCarousel from "../homepage/Partners";
import ContactUs from "../homepage/ContactUs";
// import CommonHeader from "@/components/ui/CommonHeader";
import Button from "@/components/ui/Button";
import { ColorContext } from "@/components/context";

//
// type CarouselCard = {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// };

// // const cards_test: CarouselCard[] = [
// //   {
// //     icon: (
// //       <img
// //         src="/path-to-icon-1.svg"
// //         alt="Vtiger CRM Automation"
// //         className="w-12 h-12 mx-auto"
// //       />
// //     ),
// //     title: "Vtiger CRM Automation",
// //     description:
// //       "Get complete Vtiger CRM automation workflows specifically for your business processes.",
// //   },
// //   {
// //     icon: (
// //       <img
// //         src="/path-to-icon-2.svg"
// //         alt="Insights & Reports"
// //         className="w-12 h-12 mx-auto"
// //       />
// //     ),
// //     title: "Insights & Reports",
// //     description:
// //       "Get customised insights, filters, reports & statistics with Vtiger CRM's One view feature for an accurate assessment.",
// //   },
// //   {
// //     icon: (
// //       <img
// //         src="/path-to-icon-3.svg"
// //         alt="Minimize manual intervention"
// //         className="w-12 h-12 mx-auto"
// //       />
// //     ),
// //     title: "Minimize manual Intervention",
// //     description:
// //       "We can implement workflow automation to eliminate redundant administrative tasks and procedures.",
// //   },
// // ];

//

// type BarProps = {
//   barColor: string;
// };

type PageColor = {
  primaryText: string;
  primaryBackground: string;
  primaryBorder: string;
  cardText?: string;
  // barColor: string;
};

type Steps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

type CoverSection = {
  pageTitle: string;
  pageDescription: string;
  coverImage: string;
  coverImageAlt: string;
  coverIcon: string;
  coverList?: string[];
};

type MidSection = {
  titleLeft?: string;
  descriptionLeft?: React.ReactElement;
  descriptionRight?: React.ReactElement;
  image: string;
  imageAlt: string;
  li?: string[];
  rightLi?: string[];
};

// type CardSection = {
//   title: string;
//   heading: string;
//   description: string;
//   description1: string;
//   li?: string[];
// };

// Enterprise Services Component
interface ServiceItem {
  id: number;
  name: string;
}

interface ServiceListProps {
  services: ServiceItem[];
}

interface EnterpriseServicesProps {
  title?: string;
  leftServices: ServiceItem[];
  rightServices: ServiceItem[];
}

interface EnterpriseServicesProps {
  title?: string;
  leftServices: ServiceItem[];
  rightServices: ServiceItem[];
}

type EngagementProps = {
  steps: Steps[];
};

type VideoSectionProps = {
  title: string;
  image: string;
  imageAlt: string;
};

interface TabContent {
  title: string;
  description: string | JSX.Element;
}

export interface LevelOnePage {
  pageColor: PageColor;
  coverSection: CoverSection;
  midSection: MidSection;
  enterpriseServices: EnterpriseServicesProps;
  engagement?: EngagementProps;
  videoSection: VideoSectionProps;
  SectionTabs: Record<string, TabContent>;
}

interface SecurityLevel1Props {
  pageData: LevelOnePage;
}

const ProductPageBuilder: React.FC<SecurityLevel1Props> = ({ pageData }) => {
  const {
    pageColor,
    coverSection,
    midSection,
    SectionTabs,
    enterpriseServices,
    videoSection,
  } = pageData;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  const colorContext = useContext(ColorContext);
  if (!colorContext) {
    throw new Error("ColorContext is null");
  }
  const { setLineColor } = colorContext;

  useEffect(() => {
    setLineColor(pageColor.primaryBorder);
  }, [pageColor.primaryBorder, setLineColor]);

  return (
    <>
      {/* Main Banner Section */}
      <section className="mt-5 md:mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center py-4 lg:py-[6rem] gap-6 lg:gap-10">
        <div className="md:col-span-7 flex flex-col justify-center items-start">
          <Typography
            as="h2"
            color={pageColor.primaryText}
            className="leading-[25px] lg:leading-10"
          >
            {coverSection.pageTitle}
          </Typography>
          <Typography
            as="h3"
            variant="subHeading"
            color="text-gray-dark"
            className="mt-6 leading[25px] lg:leading-10"
          >
            {coverSection.pageDescription}
          </Typography>
          <Button
            className={`my-6 rounded-full ${pageColor.primaryBackground}`}
          >
            <Typography as="span" className="font-bold" color="text-white">
              DOWNLOAD BROCHURES
            </Typography>
          </Button>
        </div>
        <div className="md:col-span-5 flex justify-center items-center">
          <Image
            src={coverSection.coverImage}
            alt={coverSection.coverImageAlt}
            width={560}
            height={260}
          />
        </div>
      </section>

      {/* Icon List Section */}

      {/* Mid Section */}
      <section className="mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center px-4 sm:px-6 lg:px-18 gap-6 mb-[2rem] lg:gap-10">
        <div className="md:col-span-8">
          {midSection.descriptionLeft}

          {midSection.descriptionRight}

          <div className="flex justify-between gap-8 mb-24">
            {/* Left-aligned list */}
            <ul className="flex flex-col gap-1 font-bold mt-4 list-inside list-disc text-gray-600 w-1/2">
              {[midSection?.li].map((section, sectionIndex) =>
                section?.map((item, index) => (
                  <li
                    key={`left-${sectionIndex}-${index}`}
                    className={`flex items-center gap-2 ${
                      sectionIndex > 0 ? "px-4" : ""
                    }`}
                  >
                    <span>→</span> {/* Left-aligned arrow */}
                    <Typography
                      as="span"
                      color="text-gray-600"
                      className="font-[500]"
                    >
                      {item}
                    </Typography>
                  </li>
                ))
              )}
            </ul>

            {/* Right-aligned list */}
            <ul className="flex flex-col gap-1 font-bold mt-4 list-inside list-disc text-gray-600 w-1/2 text-right">
              {[midSection?.rightLi].map((section, sectionIndex) =>
                section?.map((item, index) => (
                  <li
                    key={`right-${sectionIndex}-${index}`}
                    className={`flex items-center gap-2 ${
                      sectionIndex > 0 ? "px-4" : ""
                    }`}
                  >
                    <span>→</span> {/* Left-aligned arrow */}
                    <Typography
                      as="span"
                      color="text-gray-600"
                      className="font-[500]"
                    >
                      {item}
                    </Typography>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="md:col-span-4 flex justify-center items-center">
          <Image
            src={midSection.image}
            alt={midSection.imageAlt}
            width={274}
            height={130}
          />
        </div>
      </section>

      {/* Card Section */}
      <section className="bg-gradient-to-b from-primary-blue to-[#1B1B1B] text-white py-8 mt-12 md:mt-4">
        <div className="max-w-screen-xl mx-auto md:px-12 pb-12">
          <div className="flex flex-col items-center justify-center">
            <CommonHeader color="text-primary-orange">OUR SERVICE</CommonHeader>
          </div>

          <div className="mt-10">
            <PrimaryTab tabs={SectionTabs} />
          </div>
        </div>
      </section>

      {/* <Bar barColor={pageColor.barColor} /> */}

      {videoSection && (
        <section className="mt-12 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center py-4 gap-6 lg:gap-10">
          <div className="lg:col-span-7 flex flex-col justify-center items-start">
            <Typography
              as="h4"
              color={`${pageColor.primaryText}`}
              className="leading-10"
            >
              {videoSection.title}
            </Typography>

            <Button
              className={`my-6 rounded-full ${pageColor.primaryBackground}`}
            >
              <Typography
                as="span"
                className="font-bold uppercase"
                color="text-white"
              >
                Talk To Our Consultant
              </Typography>
            </Button>
          </div>
          <div className="lg:col-span-5 flex justify-center items-center">
            <img
              src={videoSection.image}
              alt={videoSection.imageAlt}
              className="w-full max-w-xs sm:max-w-lg"
            />
          </div>
        </section>
      )}

      <section className="mt-12 max-w-screen-xl mx-auto ">
        <Typography
          as="h4"
          color={`${pageColor.primaryText}`}
          className="leading-10"
        >
          Benefits of choosing Katalyst as your Vtiger CRM Solution Provider
        </Typography>
      </section>

      {enterpriseServices.title && (
        <EnterpriseServices
          title={enterpriseServices.title}
          leftServices={enterpriseServices.leftServices}
          rightServices={enterpriseServices.rightServices}
        />
      )}

      <div className="mt-24">
        <ContactUs />
      </div>
    </>
  );
};

// Bar Section */}

// const Bar: React.FC<BarProps> = ({ barColor }) => {
//   return (
//     <div
//       className={`my-12 max-w-screen-md lg:max-w-screen-xl rounded-full mx-auto h-12 ${barColor}`}
//     ></div>
//   );
// };

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <ul className="space-y-1">
      {services.map((service, index) => (
        <li key={service.id} className="flex items-center gap-3">
          <span>{index + 1}.</span>
          <span>{service.name}</span>
        </li>
      ))}
    </ul>
  );
};

const EnterpriseServices: React.FC<EnterpriseServicesProps> = ({
  title = "Our Enterprise Applications portfolio consist of SAP and Oracle Hospitality solutions. We offer following services",
  leftServices,
  rightServices,
}) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white rounded-lg p-6">
      <div className="mb-6">
        <Typography
          as={"h4"}
          className="text-xl font-medium text-gray-800 leading-relaxed"
        >
          {title}
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-8">
        <div>
          <ServiceList services={leftServices} />
        </div>
        <div>
          <ServiceList services={rightServices} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageBuilder;
