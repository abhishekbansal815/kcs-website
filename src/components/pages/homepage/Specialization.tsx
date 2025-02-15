import CardWithPulse from "@/components/ui/cards/CardWithPulse";
import CommonHeader from "@/components/ui/CommonHeader";
import PrimaryTab from "@/components/ui/tabs/PrimaryTab-Second";
import Typography from "@/components/ui/Typography";
import icons from "@/components/utils/Icons";
import React from "react";

const Specialization = () => {
  const cardsData = [
    {
      icon: icons.erpSpecialization,
      title: "ERP",
      description:
        // "It is a long established fact that a reader will be distracted by the readable.",
        "Our solutions streamline your business processes, optimizing resource utilization and enhancing overall productivity.",
      buttonText: "READ MORE",
    },
    {
      icon: icons.crmHome,
      title: "CRM",
      description:
        "We help you build lasting customer relationships, driving growth and fostering customer loyalty.",
      buttonText: "READ MORE",
    },
    {
      icon: icons.cyberHome,
      title: "CYBER SECURITY",
      description:
        "We employ the latest technologies and industry best practices to fortify your digital infrastructure against cyber threats.",
      buttonText: "READ MORE",
    },
    {
      icon: icons.managedServicesHome,
      title: "MANAGED SERVICES",
      description:
        "We take care of the complexities of IT management, allowing you to focus on your core business objectives.",
      buttonText: "READ MORE",
    },
  ];
  const content = {
    "it-consulting": {
      title: "IT CONSULTING",
      description: (
        <div className="space-y-4">
          <p className="text-white leading-7">
            Welcome to Katalyst Consulting Services, your trusted partner in
            revolutionizing business efficiency and security.
          </p>
          <p className="text-white leading-7">
            As a premier provider of Enterprise Resource Planning (ERP),
            Customer Relationship Management (CRM), Cyber Security, and Managed
            Services, we are dedicated to empowering organizations with
            cutting-edge solutions tailored to their unique needs.
          </p>
        </div>
      ),
    },
    crm: {
      title: "CRM",
      description: (
        <div className="space-y-4">
          <p className="text-white leading-7">
            Welcome to Katalyst Consulting Services, your trusted partner in
            revolutionizing business efficiency and security.
          </p>
          <p className="text-white leading-7">
            As a premier provider of Enterprise Resource Planning (ERP),
            Customer Relationship Management (CRM), Cyber Security, and Managed
            Services, we are dedicated to empowering organizations with
            cutting-edge solutions tailored to their unique needs.
          </p>
          <ul className="space-y-2 list-disc list-inside text-white">
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Integrate modern ERP, POS, and e-commerce solutions for enhanced
                business performance.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Establish a unified source of truth for operational insights.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Benefit from business consulting services tailored to your
                needs.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Provide a range of tools, from open-source to high-end
                commercial intelligent solutions.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Embrace digital transformation in key operational domains for
                increased business agility and sustained success.
              </Typography>
            </li>
          </ul>
        </div>
      ),
    },
    erp: {
      title: "ERP",
      description: (
        <div className="space-y-4">
          <p className="text-white leading-7">
            Optimize business performance through a seamlessly integrated
            approach utilizing modern ERP, POS, and e-commerce solutions to
            establish a comprehensive understanding of operations.
          </p>
          <ul className="space-y-2 list-disc list-inside text-white">
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Our cybersecurity services provide a strong defence against
                digital attacks.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Safeguard systems, networks, and overall business from potential
                threats.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Collaborate with us for tailored solutions that fortify key
                digital assets.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Preserve your business&apos;s reputation through proactive
                cybersecurity measures.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Stay ahead of cybersecurity risks with our comprehensive
                approach.
              </Typography>
            </li>
          </ul>
        </div>
      ),
    },
    "cyber-security": {
      title: "CYBER SECURITY",
      description: (
        <div className="space-y-4">
          <p className="text-white leading-7">
            KCS Academy facilitates quicker adoption of evolving enterprise
            application and cybersecurity space, ensuring effective skill
            development and increased productivity, aligning businesses with
            continuous technological advancements.
          </p>
          <ul className="space-y-2 list-disc list-inside text-white">
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Cloud technology adoption accelerates the pace of business
                transformation.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                KCS Academy assists in keeping the workforce updated on the
                latest features and capabilities.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Investment in workforce skills ensures alignment with dynamic
                market conditions.
              </Typography>
            </li>
            <li>
              <Typography as="p" className="inline my-6 max-w-none text-white leading-7">
                Enhance productivity by staying at the forefront of
                technological advancements.
              </Typography>
            </li>
          </ul>
        </div>
      ),
    },
    "managed-services": {
      title: "MANAGED SERVICES",
      description: (
        <div className="space-y-4">
          <p className="text-white leading-7">
            Welcome to Katalyst Consulting Services, your trusted partner in
            revolutionizing business efficiency and security.
          </p>
          <p className="text-white leading-7">
            As a premier provider of Enterprise Resource Planning (ERP),
            Customer Relationship Management (CRM), Cyber Security, and Managed
            Services, we are dedicated to empowering organizations with
            cutting-edge solutions tailored to their unique needs.
          </p>
        </div>
      ),
    },
    innovation: {
      title: "INNOVATION",
      description: (
        <div className="space-y-4">
          <p className="text-white leading-7">
            Welcome to Katalyst Consulting Services, your trusted partner in
            revolutionizing business efficiency and security.
          </p>
          <p className="text-white leading-7">
            As a premier provider of Enterprise Resource Planning (ERP),
            Customer Relationship Management (CRM), Cyber Security, and Managed
            Services, we are dedicated to empowering organizations with
            cutting-edge solutions tailored to their unique needs.
          </p>
        </div>
      ),
    },
  };
  return (
    <div className="text-white global-margin global-padding relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15">
        <div
          className="absolute inset-x-[5%] bottom-0 top-2/3 sm:top-1/3 md:top-0 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: "url('/components/background-map-image.png')",
            backgroundSize: "90% auto",
          }}
        ></div>
      </div>

      {/* Cards Section */}
      <div className="md:bg-gradient-to-b from-primary-blue/80 to-[#1B1B1B]/90 pt-12 pb-24 md:pb-16 relative z-30">
        {/* <div className="flex flex-col items-center mb-16"> */}
        <div className="flex flex-col items-center mb-8 md:mb-16 relative z-40">
          <CommonHeader color="text-primary-orange">
            OUR SPECIALIZATION
          </CommonHeader>
        </div>
        {/* <div className="max-w-screen-xl mx-auto px-6 xl:px-12 lg:h-[300px] md:h-[150px] inset-0 flex items-center justify-center"> */}
        <div className="max-w-screen-xl mx-auto px-4 xl:px-12 flex items-center justify-center">
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-12 mb-12 lg:mb-16"> */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full mb-16 lg:mb-24">
            {cardsData.map((card, index) => (
              <CardWithPulse
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                className="min-w-[140px]"
              />
            ))}
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-b from-primary-blue to-[#1B1B1B] text-white py-12 lg:pt-[7rem] md:pt-[4rem] relative z-10 mt-16">
        <div className="max-w-screen-xl mx-auto md:px-12 pb-12">
          <div className="mt-10 relative z-40">
            <PrimaryTab tabs={content} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialization;
