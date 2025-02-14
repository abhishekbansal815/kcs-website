"use client";

import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import icons from "@/components/utils/Icons";
import Image from "next/image";
import React from "react";

type Services = {
  title: string;
  description: string;
  icon: string;
};

const services: Services[] = [
  {
    title: "Transformation Leaders",
    description:
      "Katalyst IT Services serves as the Katalyst for change, committed to offering a comprehensive suite of solutions that enhance client processes, elevate productivity, and strengthen security.",
    icon: icons.leaders,
  },
  {
    title: "Security Fortification",
    description:
      "We prioritize security, delivering cutting-edge measures to fortify digital landscapes and safeguard our clients' valuable assets.",
    icon: icons.security,
  },
  {
    title: "Align Business Objectives",
    description:
      "Our solutions go beyond technological advancements, aligning improvements with overarching business objectives to ensure comprehensive and strategic success.",
    icon: icons.alignBusinessObjective,
  },
  {
    title: "Global Expertise",
    description:
      "Our dedication spans the globe, providing unparalleled technical proficiency and innovative digital solutions to individuals and businesses worldwide.",
    icon: icons.global,
  },
  {
    title: "Driving Transformative Solutions",
    description:
      "At Katalyst IT Services, we are the driving force behind transformative IT solutions, propelling businesses towards unparalleled success.",
    icon: icons.transformativeSolutions,
  },
  {
    title: "Productivity Optimization",
    description:
      "Specializing in products and services tailored to optimize productivity, we empower clients to achieve peak performance in their operations.",
    icon: icons.productivityOptimization,
  },
  {
    title: "Profit Margin Maximization",
    description:
      "Katalyst IT Services is your partner in maximizing profit margins, offering strategic solutions to enhance financial outcomes for businesses.",
    icon: icons.profitMarginMaximization,
  },
];

const WhoWeAre = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <section className="max-w-screen-xl global-margin">
      <div className="relative bg-white py-[6rem] md:py-[8rem] flex items-center justify-center">
        {/* Background Dots */}
        <div className="absolute top-0 right-6 w-[60%] h-full">
          <Image
            src="/components/worldmap.png"
            alt="worldmap"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-12 items-center max-w-7xl global-padding">
          {/* Left Image Section */}
          <div className="mx-20 hidden sm:flex justify-center lg:justify-start">
            <Image
              src="/components/phone-illus-1.svg"
              alt="Who We Are"
              width={320}
              height={400}
              className="w-[225px] xl:w-[320px]"
            />
          </div>

          {/* Right Content Section */}
          <section className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image
                src="/icons/Tick Box.png"
                alt="tick"
                width={26}
                height={26}
              />
              <Typography as="h3" color="text-primary-orange">
                WHO WE ARE
              </Typography>
            </div>

            {/* Title */}
            <Typography as="h2" color="text-primary-blue">
              AGENTS OF CHANGE - Empowering Transformation
            </Typography>

            {/* Description */}
            <Typography as="p">
              Partnering with us means gaining a trusted ally in navigating the
              complexities of IT. Let us empower your business with innovative
              ERP solutions and robust Cyber Security measures, ensuring you not
              only stay competitive but also operate with confidence in an
              increasingly digital world.
            </Typography>

            <div className="relative py-4 flex items-center justify-start ">
              {/* CTA Button */}
              <Button size={"sm"} onClick={() => setOpenModal(!openModal)}>
                <Typography as="span" className="button-text">
                  VIEW ALL SERVICES
                </Typography>
                {/* <span>VIEW ALL SERVICES</span> */}
                <Image
                  src={icons.arrowDownSignToNavigate}
                  alt="arrow"
                  width={10}
                  height={10}
                  className={`ml-2 duration-400 transition-all  ${
                    openModal ? "transform rotate-180" : ""
                  }`}
                />
              </Button>
              <Button size={"sm"} className="mx-6 px-9i">
                <Typography as="span" className="button-text">
                  BOOK A DEMO
                </Typography>
                {/* <span>Book a Demo</span> */}
              </Button>
            </div>
          </section>
        </div>
      </div>
      {/* All Services */}
      {openModal && (
        <section className={`grid md:grid-cols-2 gap-10 mb-12`}>
          {services?.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-5"
            >
              <Image src={item.icon} alt={item.title} width={60} height={60} />

              <div>
                <Typography as="h4" color="text-primary-blue">
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
              </div>
            </div>
          ))}
        </section>
      )}
    </section>
  );
};

export default WhoWeAre;
