"use client";

import React from "react";
import PrimaryTab from "@/components/ui/tabs/PrimaryTab";
import CommonHeader from "@/components/ui/CommonHeader";
import Typography from "@/components/ui/Typography";

const content = {
  "sales-marketing": {
    title: "SALES & MARKETING",
    description: (
      <div className=" space-y-4">
        <p className="text-white leading-7">
          Utilize digital marketing, affiliate marketing, and social media to
          explore and tap into new markets across B2B, B2C, and B2G sectors. Our
          applications are designed to facilitate the creation and
          implementation of powerful sales & marketing strategies.
        </p>
        <ul className="space-y-2 list-disc list-inside text-white">
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Harness the potential of digital marketing, affiliate marketing,
              and social media marketing.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Establish meaningful connections with customers for long-term
              relationships.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Provide sales managers with specialized tools to enhance their
              capabilities.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Reduce customer churn through strategic approaches. Identify new
              opportunities within the market.
            </Typography>
          </li>
        </ul>
      </div>
    ),
  },
  operations: {
    title: "OPERATIONS",
    description: (
      <div className=" space-y-4">
        <p className="text-white leading-7">
          Optimize business performance through a seamlessly integrated approach
          utilizing modern ERP, POS, and e-commerce solutions to establish a
          comprehensive understanding of operations.
        </p>
        <ul className="space-y-2 list-disc list-inside text-white">
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Integrate modern ERP, POS, and e-commerce solutions for enhanced
              business performance.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Establish a unified source of truth for operational insights.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Benefit from business consulting services tailored to your needs.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Provide a range of tools, from open-source to high-end commercial
              intelligent solutions.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Embrace digital transformation in key operational domains for
              increased business agility and sustained success.
            </Typography>
          </li>
        </ul>
      </div>
    ),
  },
  security: {
    title: "SECURITY",
    description: (
      <div className=" space-y-4">
        <p className="text-white leading-7">
          Optimize business performance through a seamlessly integrated approach
          utilizing modern ERP, POS, and e-commerce solutions to establish a
          comprehensive understanding of operations.
        </p>
        <ul className="space-y-2 list-disc list-inside text-white">
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Our cybersecurity services provide a strong defence against
              digital attacks.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Safeguard systems, networks, and overall business from potential
              threats.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Collaborate with us for tailored solutions that fortify key
              digital assets.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Preserve your business&apos;s reputation through proactive
              cybersecurity measures.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Stay ahead of cybersecurity risks with our comprehensive approach.
            </Typography>
          </li>
        </ul>
      </div>
    ),
  },
  training: {
    title: "TRAINING",
    description: (
      <div className=" space-y-4">
        <p className="text-white leading-7">
          KCS Academy facilitates quicker adoption of evolving enterprise
          application and cybersecurity space, ensuring effective skill
          development and increased productivity, aligning businesses with
          continuous technological advancements.
        </p>
        <ul className="space-y-2 list-disc list-inside text-white">
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Cloud technology adoption accelerates the pace of business
              transformation.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              KCS Academy assists in keeping the workforce updated on the latest
              features and capabilities.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Investment in workforce skills ensures alignment with dynamic
              market conditions.
            </Typography>
          </li>
          <li>
            <Typography
              as="p"
              className="inline my-6 max-w-none text-white leading-7"
            >
              Enhance productivity by staying at the forefront of technological
              advancements.
            </Typography>
          </li>
        </ul>
      </div>
    ),
  },
};

const OurServices: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-primary-blue to-[#1B1B1B] text-white global-margin global-padding">
      <div className="max-w-screen-xl mx-auto md:px-12 pt-12 pb-12">
        <div className="flex flex-col items-center justify-center">
          <CommonHeader color="text-primary-orange">OUR SERVICE</CommonHeader>
          <h3 className="text-center md:text-start text-3xl md:text-4xl font-bold mt-2">
            Growing{" "}
            <span className="text-primary-orange text-3xl md:text-4xl font-bold mt-2">
              |
            </span>{" "}
            Managing{" "}
            <span className="text-primary-orange text-3xl md:text-4xl font-bold mt-2">
              |
            </span>{" "}
            Securing - Your Business
          </h3>
        </div>

        <div className="mt-10">
          <PrimaryTab tabs={content} btnText="GET STARTED" />
        </div>
      </div>
    </section>
  );
};
export default OurServices;
