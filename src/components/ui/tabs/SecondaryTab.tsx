"use client";

import Button from "@/components/ui/Button";
import CommonHeader from "@/components/ui/CommonHeader";
import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React, { useState } from "react";

interface TabContent {
  title: string;
  description: string | JSX.Element;
}

interface TabbedSectionProps {
  tabsContent: Record<string, TabContent>;
  header: string;
  subHeader: string;
  gradientBackground: string;
  buttonText: string;
  imageSrc?: string;
}

const SecondaryTab: React.FC<TabbedSectionProps> = ({
  tabsContent,
  header,
  subHeader,
  gradientBackground,
  buttonText,
  imageSrc,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    Object.keys(tabsContent)[0]
  );

  return (
    <section
      className={`${gradientBackground} text-primary-blue py-8 relative`}
    >
      {imageSrc && (
        <div className="absolute inset-y-0 right-0 w-1/2 md:w-[55%]">
          <Image
            src={imageSrc}
            alt="background image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}

      <div className="max-w-screen-xl mx-auto md:px-12 relative z-10">
        <div className="text-center mb-10">
          <CommonHeader color="text-primary-blue">{header}</CommonHeader>
          <Typography
            as="h3"
            color="text-primary-blue"
            className="font-bold uppercase text-center"
          >
            {subHeader}
          </Typography>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:gap-8 bg-primary-orange/40 rounded-3xl border-2 border-white/10">
          {/* Content Section */}
          <div className="flex-1 p-6 md:p-12">
            <h4 className="text-2xl font-bold mb-4">
              {tabsContent[activeTab].title}
            </h4>
            <Typography as="p" className="prose prose-primary-blue mb-6">
              {tabsContent[activeTab].description}
            </Typography>
            <Button className="bg-primary-blue text-white rounded-full px-8 md:px-16">
              <Typography
                as="span"
                className="button-text"
                variant="caption"
                color="text-white"
              >
                {buttonText}
              </Typography>
            </Button>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/20 self-stretch mx-2" />

          {/* Horizontal Divider for Mobiles */}
          <div className="w-1/2 block md:hidden h-px bg-white/20 self-stretch mt-3 mx-auto" />

          {/* Tabs Container */}
          <div className="w-full md:w-1/3 p-6 md:p-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-y-4 place-items-center">
              {Object.keys(tabsContent).map((key) => (
                <div className="w-full flex justify-center" key={key}>
                  <button
                    onClick={() => setActiveTab(key)}
                    className={`w-full sm:max-w-[250px] py-2.5 px-4 rounded-full font-semibold transition-colors ${
                      activeTab === key
                        ? "bg-primary-blue text-white"
                        : "bg-transparent text-primary-blue border border-primary-blue hover:bg-primary-blue/10"
                    }`}
                  >
                    <span className="block font-semibold truncate text-sm md:text-base button-text">
                      {tabsContent[key].title}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryTab;
