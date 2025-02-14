"use client";

import React from "react";
// import Slider from "react-slick";
import Typography from "@/components/ui/Typography";
import Image from "next/image";
import Engagement from "../homepage/Engagement";
import OurProduct from "../homepage/Index-slider and our product";
import PrimaryTab from "@/components/ui/tabs/PrimaryTab-Second";
import OurPartner2 from "../../ui/OurPartner2";
import ContactUs from "../homepage/ContactUs";
import CommonHeader from "@/components/ui/CommonHeader";
import Button from "@/components/ui/Button";
import Link from "next/link";

//  type BarProps = {
//    barColor: string;
//  };

type PageColor = {
  primaryText: string;
  primaryBackground: string;
  primaryBorder: string;
  HprimaryBackground: string;
  AprimaryBackground: string;
  primaryShadow: string;
  cardText?: string;
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
  coverList: {
    title: string;
    url: string;
  }[];
};

type IconSection = {
  coverList: {
    url: string;
    coverImage: string;
    coverImageAlt: string;
  }[];
};

type MidSection = {
  title: string;
  description: string;
  description1?: string;
  description2?: string;
  image: string;
  imageAlt: string;
  li?: string[];
  li1?: string[];
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
  barColor: string;
}

type EngagementProps = {
  steps: Steps[];
};

interface TabContent {
  title: string;
  description: string | JSX.Element;
}

export interface LevelOnePage {
  pageColor: PageColor;
  coverSection: CoverSection;
  iconSection: IconSection;
  midSection: MidSection;
  SectionTabs: Record<string, TabContent>;
  enterpriseServices: EnterpriseServicesProps;
  engagement: EngagementProps;
}

interface SecurityLevel1Props {
  pageData: LevelOnePage;
}

const LevelOnePageBuilder: React.FC<SecurityLevel1Props> = ({ pageData }) => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const settings = {
  //   dots: true,
  //   dotsClass: "slick-dots custom-dots",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  // };

  const {
    pageColor,
    coverSection,
    iconSection,
    midSection,
    SectionTabs,
    engagement,
    enterpriseServices,
  } = pageData;

  return (
    <>
      {/* Main Banner Section */}
      <section className="mt-5 md:mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center py-4 lg:py-[10rem] gap-6 lg:gap-10">
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
      className={`relative group rounded-full px-4 py-2 transition-all duration-300 ${pageColor.HprimaryBackground} ${pageColor.AprimaryBackground}`}
    >
      <Link href={item.url}>
        <Typography
          as="h3"
          color="text-primary-blue"
          className="font-[600] group-hover:text-white group-active:text-white"
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
      <section className="py-16 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center px-4 sm:px-6 lg:px-18 gap-6 mb-[2rem] lg:gap-10">
        <div className="md:col-span-8">
          <Typography className="text-base mb-4 sm:mb-6 mt-4 sm:mt-6">
            {midSection.title}
          </Typography>
          <Typography className="mt-2 sm:mt-4">
            {midSection.description}
          </Typography>
          <Typography className="mt-2 sm:mt-4">
            {midSection.description1}
          </Typography>
          <Typography className="mt-2 sm:mt-4">
            {midSection.description2}
          </Typography>

          <ul className="flex flex-col gap-1 font-bold mt-4 text-gray-600">
  {[midSection?.li, midSection?.li1].map((section, sectionIndex) => 
    section?.map((item, index) => (
      <li key={`${sectionIndex}-${index}`} className={`flex items-center gap-2 ${sectionIndex > 0 ? 'px-4' : ''}`}>
        <span>→</span> {/* Left-aligned arrow */}
        <Typography as="span" color="text-gray-600" className="font-[500]">
          {item}
        </Typography>
      </li>
    ))
  )}
</ul>


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

      {enterpriseServices.title && (
        <EnterpriseServices
          title={enterpriseServices.title}
          leftServices={enterpriseServices.leftServices}
          
          rightServices={enterpriseServices.rightServices}
        
          barColor={enterpriseServices.barColor}
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
            <Typography as="p" color="text-primary-blue" className="font-[500] px-2 lg:px-4">
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

      <div className="mt-12">
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

interface Service {
  id: number;
  name: string;
}

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <ul className="space-y-1">
      {services.map((service) => (
        <li
          key={service.id}
          className="flex items-center justify-between gap-3"
        >
          <span className="flex items-center gap-3">
            <span>→</span> {/* Arrow */}
            <span>{service.name}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

const EnterpriseServices: React.FC<EnterpriseServicesProps> = ({
  title = "Our Enterprise Applications portfolio consist of SAP and Oracle Hospitality solutions. We offer following services",
  leftServices,
  rightServices,
  barColor,
}) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white rounded-lg p-6 py-16">
      <div className="mb-6">
        <Typography
          as={"h4"}
          className={`text-xl font-medium text-gray-800 leading-relaxed bg-clip-text text-transparent ${barColor}`}
        >
          {title}
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-8 text-gray-500">
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

export default LevelOnePageBuilder;
