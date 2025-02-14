import Card from "@/components/ui/cards/Card";
import CommonHeader from "@/components/ui/CommonHeader";
import React from "react";
import { Steps } from "./Index";

type EngagementProps = {
  steps: Steps[];
};

const Engagement: React.FC<EngagementProps> = ({ steps }) => {
  return (
    <section className="max-w-screen-xl global-margin global-padding">
      <div className="px-6 md:px-12">
        <CommonHeader color="text-primary-blue">
          LEARN OUR ENGAGEMENT PROCESS
        </CommonHeader>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block px-6 md:px-12 mt-16">
        <div className="grid grid-cols-4 gap-4 lg:gap-8 items-stretch">
          {steps.map((step, index) => (
            <Card
              key={index}
              index={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              buttonText={"r"}
              onButtonClick={() => alert(`${step.title} clicked!`)}
              className="h-f ull"
            />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-16">
        <div className="grid grid-cols-2 gap-8 px-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              index={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              buttonText={"r"}
              onButtonClick={() => alert(`${step.title} clicked!`)}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
