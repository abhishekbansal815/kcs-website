import React from "react";
import WhoWeAre from "./WhoWeAre";
import Carousel from "@/components/ui/Carousel";
import PartnerCarousel from "./Partners";
import NewsSection from "./Index-news";
import OurProduct from "./Index-slider and our product";
import OurServices from "./OurService";
import Specialization from "./Specialization";
import Engagement from "./Engagement";
import CurrentOffers from "./Offers";
import OurValues from "./OurValues";
import FAQ from "./FAQ";
import Events from "./Events";
import ContactUs from "./ContactUs";
import WhyChooseUs from "./WhyChooseUs";
import icons from "@/components/utils/Icons";
import Button from "@/components/ui/Button";
import SetColor from "./SetColor";

export type Steps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};
const steps: Steps[] = [
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
const Homepage = () => {


  return (
    <div>
      <SetColor color="border-primary-orange"/>
      <Carousel />
      <PartnerCarousel />
      <WhoWeAre />
      <Specialization />
      <Engagement steps={steps} />
      <div className="text-center global-margin global-padding">
        <Button variant="secondary" className="rounded-full font-bold px-16">
          BOOK A FREE DEMO
        </Button>
      </div>
      <OurServices />
      <OurProduct />
      <CurrentOffers />
      <OurValues />
      <FAQ />
      <NewsSection />
      <Events />
      <WhyChooseUs />
      <ContactUs />
    </div>
  );
};

export default Homepage;
