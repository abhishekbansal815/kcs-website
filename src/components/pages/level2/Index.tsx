"use client";

import React, { useState, useEffect, useContext } from "react";
import Typography from "@/components/ui/Typography";
import Image from "next/image";
import Engagement from "../homepage/Engagement";
import OurProduct from "../homepage/Index-slider and our product";
import OurPartner2 from "../../ui/OurPartner2";
import ContactUs from "../homepage/ContactUs";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ColorContext } from "@/components/context";
import { usePathname } from "next/navigation";

// type BarProps = {
//   barColor: string;
// };
// changes

type PageColor = {
  primaryText: string;
  primaryBackground: string;
  HprimaryBackground: string;
  AprimaryBackground: string;
  primaryBorder: string;
  primaryShadow: string;
  cardText?: string;
  // barColor: string;
};

type Steps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

type DynamicList = {
  [key: string]: string | DynamicList;
};

type CoverSection = {
  pageTitle: string;
  pageDescription: string;
  coverImage: string;
  coverImageAlt: string;
  coverIcon: string;
  coverList: {
    title: string;
    url: string;
  }[];
};

type MidSection = {
  title: string;
  title1?: string;
  description: string;
  description1?: string;
  description2?: string;
  image: string;
  imageAlt: string;
  li: string[];
  rightLi?: string[];
};

type IconSection = {
  coverList: {
    url: string;
    coverImage: string;
    coverImageAlt: string;
  }[];
};

type CardSection = {
  title: string;
  title1?: string;
  heading: string;
  description: string;
  description1: string;
  description2?: string;
  description3?: string;
  description4?: string;
  cardImage: string;
  li?: string[];
};

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

export interface LevelTwoPage {
  pageColor: PageColor;
  coverSection: CoverSection;
  midSection: MidSection;
  iconSection: IconSection;
  cardSection: CardSection[];
  enterpriseServices: EnterpriseServicesProps;
  engagement: EngagementProps;
}

interface SecurityLevel1Props {
  pageData: LevelTwoPage;
}

const LevelTwoPageBuilder: React.FC<SecurityLevel1Props> = ({ pageData }) => {
  const [isMobile, setIsMobile] = useState(false);

  const path = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    pageColor,
    coverSection,
    midSection,
    cardSection,
    iconSection,
    engagement,
    enterpriseServices,
  } = pageData;

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
      <section className="mt-5 md:mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center py-4 lg:py-[8rem] gap-6 lg:gap-10">
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
      <section className="max-w-screen-sm lg:max-w-screen-lg mx-auto mt-12">
        <div
          className={`w-auto h-[72px] lg:h-[112px] flex items-center justify-between rounded-full border-4 px-8 ${pageColor.primaryBorder} ${pageColor.primaryShadow}`}
        >
          <Image
            src={coverSection.coverIcon}
            alt={coverSection.coverImageAlt}
            width={134}
            height={50}
            className="w-[64px] md:w-[82px] lg:w-[134px]"
          />
          <ul className="hidden md:flex items-center gap-8 font-bold">
            {coverSection.coverList.map((item, index) => (
              <li
                key={index}
                className={`${path === item.url && `text-white ${pageColor.primaryBackground}`} relative group rounded-full px-4 py-2 transition-all duration-300 ${pageColor.HprimaryBackground}`}
              >
                <Link href={item.url}>
                  <Typography
                    as="h3"
                    color="text-primary-blue"
                    className={`font-[600] group-hover:text-white ${path === item.url && `text-white`} `}
                  >
                    {item.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mid Section */}
      <section className="mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center px-4 sm:px-6 lg:px-18 gap-6 mb-[2rem] lg:gap-10">
        <div className="md:col-span-8">
          <Typography className="text-base mb-4 sm:mb-6 mt-4 sm:mt-6">
            {midSection.title}
          </Typography>
          <Typography
            className="text-base mb-4 sm:mb-6 mt-4 sm:mt-6 font-semibold"
            color={`${pageColor.cardText}`}
          >
            {midSection.title1}
          </Typography>

          <Typography className="mt-2 sm:mt-4">
            {midSection.description}
          </Typography>
          <Typography
            className="text-base mb-4 sm:mb-6 mt-4 sm:mt-6 font-semibold"
            color={`${pageColor.cardText}`}
          >
            {midSection.description1}
          </Typography>

          <div className="flex justify-between gap-8">
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
      <section className="mt-24 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-18">
        {isMobile ? (
          cardSection.map((card, index) => (
            <div key={index} className="text-sm rounded-2xl relative mt-4">
              <div className="grid grid-cols-1 mb-5">
                <div className="md:col-span-8">
                  <div
                    className={`bg-transparent h-10 border-4 ${pageColor.primaryBorder} inline-flex items-center justify-start rounded-full px-6`}
                  >
                    <Typography
                      as="h4"
                      color={`${pageColor.cardText}`}
                      className="whitespace-nowrap font-[600] px-2"
                    >
                      {card.title}
                    </Typography>
                  </div>
                  <Typography
                    as="h4"
                    color="text-[#585858]"
                    className="mb-2 sm:mb-6 mt-2 sm:mt-6"
                  >
                    {card.heading}
                  </Typography>
                  <Typography color="text-[#585858]" className="mt-2 sm:mt-4">
                    {card.description}
                  </Typography>

                  <Typography color="text-[#585858]" className="mb-4 sm:mb-6">
                    {card.description1}
                  </Typography>
                  <Typography color="text-[#585858]" className="mb-4 sm:mb-6">
                    {card.description2}
                  </Typography>
                  <Typography color="text-[#585858]" className="mb-4 sm:mb-6">
                    {card.description4}
                  </Typography>
                  <Typography
                    className="text-base mb-4 sm:mb-6 mt-4 sm:mt-6 font-semibold"
                    color={`${pageColor.cardText}`}
                  >
                    {card.description3}
                  </Typography>

                  <ul className="flex flex-col gap-2 list-disc list-inside text-gray-600">
                    {[card?.li].map((section, sectionIndex) =>
                      section?.map((item, index) => (
                        <li
                          key={`${sectionIndex}-${index}`}
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
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-12">
            {cardSection.map((card, index) =>
              index % 2 === 0 ? (
                <div key={index} className="text-sm rounded-2xl relative">
                  <div className="grid grid-cols-1 md:grid-cols-12 items-center px-2 gap-6 mb-[2rem] md:gap-10">
                    <div className="md:col-span-8">
                      <div
                        className={`bg-transparent h-10 border-4 ${pageColor.primaryBorder} inline-flex items-center justify-start rounded-full px-4`}
                      >
                        <Typography
                          as="h4"
                          color={`${pageColor.cardText}`}
                          className="whitespace-nowrap font-[600] px-2"
                        >
                          {card.title}
                        </Typography>
                      </div>
                      <Typography
                        as="h4"
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6 mt-4 sm:mt-6"
                      >
                        {card.heading}
                      </Typography>
                      <Typography
                        color="text-[#585858]"
                        className="mt-2 sm:mt-4"
                      >
                        {card.description}
                      </Typography>
                      <Typography
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6"
                      >
                        {card.description1}
                      </Typography>
                      <Typography
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6"
                      >
                        {card.description2}
                      </Typography>
                      <Typography
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6"
                      >
                        {card.description4}
                      </Typography>
                      <Typography
                        className="text-base mb-4 sm:mb-6 mt-4 sm:mt-6 font-semibold"
                        color={`${pageColor.cardText}`}
                      >
                        {card.description3}
                      </Typography>
                      <ul className="flex flex-col gap-2 list-disc list-inside text-gray-600">
                        {[card?.li].map((section, sectionIndex) =>
                          section?.map((item, index) => (
                            <li
                              key={`${sectionIndex}-${index}`}
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
                    <div className="md:col-span-4 flex justify-center items-center">
                      <img
                        src={card.cardImage}
                        alt={card.title}
                        className="w-[150px] h-[150px] lg:w-[274px] lg:h-[130px]"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index} className="text-sm rounded-2xl relative">
                  <div className="grid grid-cols-1 md:grid-cols-12 items-center px-2 gap-6 mb-[2rem] md:gap-10">
                    <div className="md:col-span-3 flex justify-center items-center">
                      <img
                        src={card.cardImage}
                        alt={card.title}
                        className="w-[150px] h-[150px] lg:w-[274px] lg:h-[130px]"
                      />
                    </div>
                    <div className="md:col-span-9">
                      <div
                        className={`bg-transparent h-10 border-4 ${pageColor.primaryBorder} inline-flex items-center justify-start rounded-full px-4`}
                      >
                        <Typography
                          as="h4"
                          color={`${pageColor.cardText}`}
                          className="whitespace-nowrap font-[600] px-2"
                        >
                          {card.title}
                        </Typography>
                      </div>
                      <Typography
                        as="h4"
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6 mt-4 sm:mt-6"
                      >
                        {card.heading}
                      </Typography>
                      <Typography
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6"
                      >
                        {card.description}
                      </Typography>
                      <Typography
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6"
                      >
                        {card.description1}
                      </Typography>
                      <Typography
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6"
                      >
                        {card.description2}
                      </Typography>
                      <Typography
                        color="text-[#585858]"
                        className="mb-4 sm:mb-6"
                      >
                        {card.description4}
                      </Typography>
                      <Typography
                        className="text-base mb-4 sm:mb-6 mt-4 sm:mt-6 font-semibold"
                        color={`${pageColor.cardText}`}
                      >
                        {card.description3}
                      </Typography>

                      <ul className="flex flex-col gap-2 list-disc list-inside text-gray-600">
                        {[card?.li].map((section, sectionIndex) =>
                          section?.map((item, index) => (
                            <li
                              key={`${sectionIndex}-${index}`}
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
                </div>
              )
            )}
          </div>
        )}
      </section>

      {/* <Bar barColor={pageColor.barColor} /> */}
      {enterpriseServices.title && (
        <EnterpriseServices
          title={enterpriseServices.title}
          leftServices={enterpriseServices.leftServices}
          rightServices={enterpriseServices.rightServices}
        />
      )}
      {/* Engagement Process */}
      <Engagement steps={engagement.steps} />
      <div className="text-center">
        <Button
          className={`px-16 my-6 rounded-full ${pageColor.primaryBackground}`}
        >
          <Typography as="span" className="font-bold" color="text-white">
            BOOK A FREE DEMO
          </Typography>
        </Button>
      </div>
      <OurProduct />
      {/* Card Section */}
      <section className="text-white mb-4 md:mb-16">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0 ">
          <div className="flex flex-col">
            <Typography
              as="p"
              color="text-primary-blue"
              className="font-[500] px-2 lg:px-4"
            >
              Explore More..
            </Typography>
          </div>

          <div className="mt-2">
            <ul className="flex items-center justify-start gap-1">
              {/* Tab 1 */}
              {iconSection.coverList.map((item, index) => (
                <li key={index} className="flex flex-col items-center">
                  <Link href={item.url}>
                    <div className="p-2 lg:p-4">
                      <Image
                        src={item.coverImage}
                        alt={item.coverImageAlt}
                        width={40}
                        height={40}
                        className="w-[40px] md:w-[40px] lg:w-[40px]"
                      />{" "}
                      {/* Replace with your icon image */}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <OurPartner2 />
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
//       className={`my-12 max-w-screen-md md:max-w-screen-xl rounded-full mx-auto h-12 ${barColor}`}
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
  title = "",
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

const RenderList = ({ data }: { data: DynamicList }) => {
  return (
    <ul>
      {Object.entries(data).map(([key, value], index) => (
        <li key={index}>
          <strong>{key}: </strong>
          {typeof value === "string" ? (
            value // Render string values directly
          ) : (
            <RenderList data={value} /> // Recursively render nested objects
          )}
        </li>
      ))}
    </ul>
  );
};

export default LevelTwoPageBuilder;
