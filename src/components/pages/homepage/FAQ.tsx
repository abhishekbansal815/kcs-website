"use client";

import React from "react";
import PrimaryTab from "@/components/ui/tabs/PrimaryTab";
import CommonHeader from "@/components/ui/CommonHeader";

const content = {
  "erp-faq": {
    title: "ERP FAQ",
    description: (
      <p className="text-white leading-7">
        Find and grow new markets and opportunities through digital marketing,
        affiliate marketing, and social marketing. Whether you are in the B2B,
        B2C, or B2G space, we can help you build and run effective and holistic
        marketing strategies.
        <br />
        <br /> Build great relationships with your customers, empower your sales
        managers. We have tools and processes for you to manage your brand,
        reduce sales cycles, focus on the right opportunities, and reduce
        customer churn.
      </p>
    ),
  },
  "crm-faq": {
    title: "CRM FAQ",
    description: (
      <p className="text-white leading-7">
        Streamline and optimize your operational processes with our innovative
        tools and strategies to ensure efficiency, scalability, and sustained
        growth.
      </p>
    ),
  },
  "cyber-security-faq": {
    title: "CYBER SECURITY FAQ",
    description: (
      <p className="text-white leading-7">
        Protect your business with cutting-edge security solutions tailored to
        your specific needs, ensuring data privacy and robust defense against
        cyber threats.
      </p>
    ),
  },
  "managed-services-faq": {
    title: "MANAGED SERVICES FAQ",
    description: (
      <p className="text-white leading-7">
        Empower your workforce with professional training programs designed to
        improve skills, foster growth, and achieve organizational goals
        effectively.
      </p>
    ),
  },
};

const FAQ: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-primary-blue to-[#1B1B1B] text-white py-8 global-margin global-padding">
      <div className="max-w-screen-xl mx-auto md:px-12 py-12">
        <div className="flex flex-col items-center justify-center">
          <CommonHeader color="text-primary-orange">
            FREQUENTLY ASKED QUESTIONS
          </CommonHeader>
        </div>

        <div className="mt-10">
          <PrimaryTab tabs={content} btnText="SEE ALL QUESTIONS" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
