"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import CommonHeader from "@/components/ui/CommonHeader";
import OurProduct from "../homepage/Index-slider and our product";
import Engagement from "../homepage/Engagement";
import icons from "@/components/utils/Icons";
import OurPartner2 from "@/components/ui/OurPartner2";
import ContactUs from "../homepage/ContactUs";
import "./style.css";

type FAQProps = {
  id: number;
  title: string;
  description: string;
  category: string; // New field for category
};

const faqs: FAQProps[] = [
  {
    id: 1,
    title: "What is the scope of managed services for enterprise applications?",
    description:
      "Managed services cover the monitoring, maintenance, and support of your enterprise applications, ensuring optimal performance and availability.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 2,
    title: "How can managed services benefit our business?",
    description:
      "Managed services improve efficiency, reduce downtime, enhance security, and allow your IT team to focus on strategic initiatives rather than routine tasks.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 3,
    title: "What types of enterprise applications can be supported?",
    description:
      "We offer support for a wide range of applications, including ERP systems, CRM platforms, databases, and custom-developed software.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 4,
    title: "How do you ensure the security of our enterprise applications?",
    description:
      "Our managed services include robust security measures, such as regular updates, vulnerability assessments, and proactive threat monitoring, to safeguard your applications.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 5,
    title:
      "What is the process for onboarding our enterprise applications to your managed services?",
    description:
      "We conduct a thorough assessment, develop a customized onboarding plan, and work closely with your team to seamlessly transition and optimize your applications.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 6,
    title: "How is system performance monitored and optimized?",
    description:
      "We employ advanced monitoring tools to track performance metrics, identify potential issues, and proactively optimize your enterprise applications for peak efficiency.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 7,
    title:
      "What level of support is provided, and what is the response time for issue resolution?",
    description:
      "Our support includes 24/7 monitoring, and we adhere to predefined SLAs to ensure timely response and resolution of issues, minimizing downtime.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 8,
    title:
      "Do you provide regular reports on the performance of our enterprise applications?",
    description:
      "Yes, we provide regular reports detailing performance metrics, system health, and any actions taken, ensuring transparency and accountability.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 9,
    title: "How are updates and patches managed for our applications?",
    description:
      "We handle the timely application of updates, patches, and security fixes to ensure your enterprise applications are always up-to-date and secure.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 10,
    title: "What is the cost structure for your managed services?",
    description:
      "Our pricing is transparent and based on the scope of services required. We work with clients to tailor a cost-effective solution that meets their specific needs and budget.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 11,
    title: "Can You Assist with Application Integration?",
    description:
      "Absolutely. Our experts specialize in seamless application integration, ensuring that different software solutions work harmoniously to maximize efficiency and data flow across your organization.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 12,
    title: "Do You Provide Customizations for Enterprise Applications?",
    description:
      "Yes, our team can tailor enterprise applications to meet the specific needs of your business. From custom workflows to specialized reporting, we work closely with clients to enhance the functionality of their applications.",
    category: "ENTERPRISE APPLICATION",
  },
  {
    id: 13,
    title: "What is managed cybersecurity services?",
    description:
      "Explanation of the concept and how it differs from traditional cybersecurity approaches.",
    category: "CYBER SECURITY",
  },
  {
    id: 14,
    title: "What specific cybersecurity services do you offer?",
    description:
      "Details about the range of services provided, such as threat monitoring, incident response, and vulnerability management.",
    category: "CYBER SECURITY",
  },
  {
    id: 15,
    title: "How will your services protect my business from cyber threats?",
    description:
      "Explanation of the strategies and technologies employed to safeguard against various cyber threats.",
    category: "CYBER SECURITY",
  },
  {
    id: 16,
    title:
      "Can you tailor your cybersecurity services to fit the specific needs of my business?",
    description:
      "Information about customization options based on the unique requirements and industry of the client.",
    category: "CYBER SECURITY",
  },
  {
    id: 17,
    title: "What measures do you have in place for data backup and recovery?",
    description:
      "Details on how the company ensures the safety and recoverability of critical data in case of a cyber incident.",
    category: "CYBER SECURITY",
  },
  {
    id: 18,
    title:
      "How do you stay updated on the latest cybersecurity threats and technologies?",
    description:
      "Insights into the company's approach to staying current with the ever-evolving landscape of cybersecurity.",
    category: "CYBER SECURITY",
  },
  {
    id: 19,
    title:
      "What is your incident response plan in case of a cybersecurity breach?",
    description:
      "Information about the steps taken to identify, contain, and mitigate the impact of a security incident.",
    category: "CYBER SECURITY",
  },
  {
    id: 20,
    title:
      "How do you ensure compliance with relevant cybersecurity regulations?",
    description:
      "Explanation of the company's efforts to adhere to industry standards and regulatory requirements.",
    category: "CYBER SECURITY",
  },
  {
    id: 21,
    title:
      "What level of support can we expect in case of technical issues or emergencies?",
    description:
      "Information about the support system in place, including response times and communication protocols during emergencies.",
    category: "CYBER SECURITY",
  },
  {
    id: 22,
    title:
      "How do you handle employee training and awareness in cybersecurity best practices?",
    description:
      "Details on the programs in place to educate and raise awareness among employees to prevent security breaches caused by human factors.",
    category: "CYBER SECURITY",
  },
  {
    id: 23,
    title: "What is IT Managed Services?",
    description:
      "IT Managed Services involve outsourcing the responsibility for maintaining and anticipating the need for a range of processes and functions to improve operations and cut expenses.",
    category: "MANAGED SERVICES",
  },
  {
    id: 24,
    title: "What Services Do You Provide?",
    description:
      "We offer a comprehensive suite of IT managed services, including network monitoring, cybersecurity, data backup, system maintenance, and helpdesk support to ensure your business runs smoothly.",
    category: "MANAGED SERVICES",
  },
  {
    id: 25,
    title: "How Can I Reach Your Support Team?",
    description:
      "Our support team is available 24/7. You can contact us through our dedicated support hotline at 1300 772 824.",
    category: "MANAGED SERVICES",
  },
  {
    id: 26,
    title: "Do You Offer Customized Solutions?",
    description:
      "Absolutely! We understand that every business has unique IT needs. Our team works closely with clients to tailor solutions that align with their specific requirements and objectives.",
    category: "MANAGED SERVICES",
  },
  {
    id: 27,
    title: "What Industries Do You Serve?",
    description:
      "We cater to a diverse range of industries, including but not limited to hospitality, manufacturing, real estate, allied health, professional services and SMB. Our adaptable solutions are tailored to meet the specific demands of each sector.",
    category: "MANAGED SERVICES",
  },
  {
    id: 28,
    title: "What is IT Managed Services?",
    description:
      "IT Managed Services involve outsourcing the responsibility for maintaining and anticipating the need for a range of processes and functions to improve operations and cut expenses.",
    category: "MANAGED SERVICES",
  },
  {
    id: 29,
    title: "Can You Assist with Cloud Migration?",
    description:
      "Yes, we specialize in seamless and secure cloud migration services. Whether you're transitioning to the cloud or optimizing your existing setup, our experts ensure a smooth and efficient process.",
    category: "MANAGED SERVICES",
  },
  {
    id: 30,
    title: "What Are the Benefits of IT Managed Services for Small Businesses?",
    description:
      "Small businesses benefit from cost-effective IT solutions, enhanced security, and access to a team of experts without the need for an in-house IT department. Our services allow you to focus on your core business activities.",
    category: "MANAGED SERVICES",
  },
  {
    id: 31,
    title: "How Can Your Services Improve Business Operations?",
    description:
      "Our managed services streamline application management, ensuring optimal performance, regular updates, and customization to align with your business processes. This leads to increased productivity and improved workflow.",
    category: "MANAGED SERVICES",
  },
  {
    id: 32,
    title: "How Do You Handle Software Updates and Patch Management?",
    description:
      "We manage the entire lifecycle of software updates, including patches and version upgrades, to ensure that your enterprise applications are always up-to-date, secure, and aligned with the latest industry standards.",
    category: "MANAGED SERVICES",
  },
  {
    id: 33,
    title: "What Support Channels Do You Offer for Application Issues?",
    description:
      "Our dedicated support team is available 24/7. You can reach us through our support hotline, email, or through our online ticketing system for prompt assistance with any application-related issues.",
    category: "MANAGED SERVICES",
  },
  {
    id: 34,
    title: "Do You Provide Training for Enterprise Application Users?",
    description:
      "Yes, we offer training sessions for end-users to ensure they are proficient in using the enterprise applications. This helps maximize the benefits of the software and promotes user adoption across your organization.",
    category: "MANAGED SERVICES",
  },
  {
    id: 35,
    title: "How Does Your Service Scale for Growing Businesses?",
    description:
      "Our managed enterprise application services are designed to scale with your business. Whether you're adding new users, expanding your operations, or integrating additional applications, our services adapt to meet the evolving needs of your enterprise.",
    category: "MANAGED SERVICES",
  },
  {
    id: 36,
    title: "What is CRM, and How Can It Benefit My Business?",
    description:
      "CRM stands for Customer Relationship Management—a software solution designed to help businesses manage customer interactions, streamline processes, and improve overall efficiency. It enhances customer satisfaction and boosts sales and marketing efforts.",
    category: "CRM",
  },
  {
    id: 37,
    title: "Which Features Does Your CRM Solution Include?",
    description:
      "Our CRM solution includes a comprehensive set of features such as contact management, lead tracking, sales automation, marketing automation, social media marketing, inventory management, help desk, project management, reporting and analytics, and integrations with other business tools to provide a holistic view of your customer interactions.",
    category: "CRM",
  },
  {
    id: 38,
    title: "Is Your CRM Solution Customizable to Fit Our Business Needs?",
    description:
      "Absolutely. Our CRM solution is highly customizable, allowing you to tailor it to your specific business processes. From custom fields to personalized workflows, we ensure the CRM aligns seamlessly with your unique requirements.",
    category: "CRM",
  },
  {
    id: 39,
    title: "How Can CRM Improve Sales and Marketing Efforts?",
    description:
      "CRM centralizes customer data, facilitates lead nurturing, and automates sales processes, leading to more effective marketing campaigns and improved sales outcomes. It helps identify and prioritize leads, ultimately increasing revenue.",
    category: "CRM",
  },
  {
    id: 40,
    title: "Is Training Provided for CRM Implementation?",
    description:
      "Yes, we offer comprehensive training for your team during the CRM implementation process. Our goal is to ensure that your staff is proficient in using the system to maximise its benefits for your business.",
    category: "CRM",
  },
  {
    id: 41,
    title: "How Does Your CRM Enhance Customer Service?",
    description:
      "Our CRM solution enables better customer service by providing a 360-degree view of customer interactions. This includes past communications, purchase history, and preferences, allowing your team to provide personalized and prompt support.",
    category: "CRM",
  },
  {
    id: 42,
    title: "Can Your CRM Integrate with Other Business Applications?",
    description:
      "Yes, our CRM solution supports seamless integration with a variety of business applications, such as email, marketing automation, and accounting software. This integration ensures data consistency and enhances overall operational efficiency.",
    category: "CRM",
  },
  {
    id: 43,
    title: "What Security Measures Are in Place to Protect Customer Data?",
    description:
      "We prioritise the security of your customer data. Our CRM solution employs robust security measures, including encryption, access controls, and regular security audits, to safeguard sensitive information and ensure compliance with data protection regulations.",
    category: "CRM",
  },
  {
    id: 44,
    title: "How Does Your CRM Support Mobile Access?",
    description:
      "Our CRM solution is designed for flexibility. It offers mobile access, allowing your team to manage customer relationships, update information, and access key data on-the-go, ensuring productivity and responsiveness.",
    category: "CRM",
  },
  {
    id: 45,
    title: "What Level of Customer Support is Provided?",
    description:
      "We offer dedicated customer support to assist with any queries or issues you may encounter. You can reach our support team through phone, email, or our online portal for prompt assistance.",
    category: "CRM",
  },
];

const FAQ = () => {
  const [activeTab, setActiveTab] = React.useState("ENTERPRISE APPLICATION");
  const [faqTab, setFaqTab] = React.useState(0);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeTab);

  const handleTabClick = (index: number) => {
    setFaqTab(index);
  };

  const steps = [
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
      description: "Enable fast, secure, and integrated business environments.",
      icon: icons.Accelerate,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="mt-5 md:mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center py-6 lg:py-20 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8">
        <div className="md:col-span-7 flex flex-col justify-center items-start text-center md:text-left">
          <Typography
            as="h2"
            className="text-2xl md:text-4xl leading-7 md:leading-[25px] lg:leading-10 font-bold"
          >
            FAQ’S
          </Typography>
          <Typography
            color="text-gray-dark"
            as="h3"
            className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl leading-6 md:leading-10 font-medium"
          >
            Explore our FAQ to get quick solutions to common questions and make
            the most of our services.
          </Typography>

          <Button className="my-6 rounded-full bg-primary-orange text-primary-blue px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
            <Typography as="span" className="font-bold uppercase">
              BOOK A DEMO
            </Typography>
          </Button>
        </div>
        <div className="md:col-span-5 flex justify-center items-center">
          <Image
            src={"/images/faq/FAQ hero img-01 1.png"}
            alt={"faq"}
            width={560}
            height={260}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="mt-5 md:mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center py-6 lg:py-20 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8">
        <div className="md:col-span-7 flex flex-col justify-center items-start text-center md:text-left">
          <Typography
            as="h6"
            className="text-sm md:text-base leading-7 md:leading-[25px] lg:leading-10 font-bold"
          >
            Welcome to Our FAQ Section!
          </Typography>
          <Typography
            color="text-gray-dark"
            as="p"
            className="mt-4 md:mt-6 text-sm md:text-base leading-5 md:leading-7 font-medium"
          >
            Navigating through common queries and concerns is now a breeze. Our
            FAQ page is designed to provide quick and concise answers to your
            most pressing questions. Whether you&apos;re a new customer seeking
            information on our products/services or a loyal patron looking for
            updates, you&apos;ll find valuable insights here. Save time and explore
            the wealth of information we&apos;ve compiled to enhance your experience.
            If your question isn&apos;t covered, feel free to reach out—our dedicated
            support team is always ready to assist you!
          </Typography>
        </div>
        <div className="md:col-span-5 flex justify-center items-center">
          <Image
            src={"/images/faq/FAQ hero img-02 1.png"}
            alt={"faq"}
            width={560}
            height={260}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-primary-blue to-[#1B1B1B] text-white py-8 px-6 sm:px-8 lg:px-16 mt-12 md:mt-4">
        <CommonHeader color="text-primary-orange">FAQ</CommonHeader>
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
          {[
            "ENTERPRISE APPLICATION",
            "CYBER SECURITY",
            "CRM",
            "MANAGED SERVICES",
          ].map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(tab);
                setFaqTab(0); // Reset to first FAQ of the selected category
              }}
              className={`${
                activeTab === tab
                  ? "bg-primary-orange text-white"
                  : "text-white border-2 border-primary-white"
              } px-4 py-2 sm:px-6 sm:py-3 h-[54px] sm:h-[54px] rounded-full text-sm sm:text-base font-semibold w-full max-w-[190px] sm:max-w-[220px] lg:max-w-[280px]`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white/5 rounded-3xl border-2 border-white/10 p-4 sm:p-6 lg:py-12 mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 divide-x-0 md:divide-x-2 h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto hide-scrollbar">
          {/* FAQ Titles */}
          <div className="md:col-span-4 space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={faq.id} className="relative">
                <button
                  onClick={() => handleTabClick(index)}
                  className={`w-full py-2 px-4 rounded-xl text-start transition-colors ${
                    faqTab === index
                      ? "bg-primary-orange text-white"
                      : "bg-transparent text-white border border-white hover:bg-white/10"
                  }`}
                >
                  <span className="block font-semibold text-sm sm:text-base">
                    {faq.title}
                  </span>
                </button>

                {/* Show FAQ description below the button on mobile */}
                {faqTab === index && (
                  <>
                    <div className="md:hidden mt-4">
                      <header className="-mx-3 text-primary-orange text-2xl font-semibold">
                        {faq.title}
                      </header>
                      <article className="mt-2 text-white prose prose-invert text-sm sm:text-base">
                        {faq.description || "No description available."}
                      </article>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Content for larger screens */}
          <div className="md:col-span-8 p-4 sm:p-6 hidden md:block">
            <header className="-mx-3 text-primary-orange text-2xl font-semibold">
              {filteredFaqs[faqTab]?.title}
            </header>
            <article className="mt-2 text-white prose prose-invert max-w-none text-sm sm:text-base">
              {filteredFaqs[faqTab]?.description || "No description available."}
            </article>
          </div>
        </div>
      </section>

      {/* Engagement, Demo button, Products, Partners, and Contact Section */}
      <Engagement steps={steps} />

      <div className="flex items-center justify-center ">
        <Button className="bg-primary-orange text-white px-20 rounded-full">
          BOOK A FREE DEMO
        </Button>
      </div>

      <OurProduct />
      <OurPartner2 />
      <ContactUs />
    </>
  );
};

// type BarProps = {
//   barColor: string;
// };

// const Bar: React.FC<BarProps> = ({ barColor }) => {
//   return (
//     <div
//       className={`my-12 max-w-screen-md lg:max-w-screen-xl rounded-full mx-auto h-12 ${barColor}`}
//     ></div>
//   );
// };

export default FAQ;
