import Card from "@/components/ui/cards/Card";
import CommonHeader from "@/components/ui/CommonHeader";
import React from "react";
import { Steps } from "../homepage/Index";

type RecruitmentProps = {
  steps: Steps[];
};

const Recruitment: React.FC<RecruitmentProps> = ({ steps }) => {
  return (
    <section className="py-16 max-w-screen-xl mx-auto">
      <div className="px-6 md:px-12">
        <CommonHeader color="text-primary-blue">
          LEARN OUR RECRUITMENT PROCESS
        </CommonHeader>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex px-6 md:px-12 mt-16 items-center justify-center">
        <div className="flex items-center gap-6 lg:gap-12">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Card
                index={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                buttonText={"r"}
                onButtonClick={() => alert(`${step.title} clicked!`)}
                className="w-[170px] lg:w-[200px] xl:w-[260px] h-[230px] xl:h-[300px] flex flex-col items-center justify-center text-center"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <section className="flex flex-col md:hidden mt-16 items-center justify-center">
        <div className="flex items-center gap-12">
          {steps.slice(0, 2).map((step, index) => (
            <React.Fragment key={index}>
              <Card
                index={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                buttonText={"r"}
                onButtonClick={() => alert(`${step.title} clicked!`)}
                className="w-[150px] h-[200px] flex flex-col items-center justify-center text-center"
              />
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center mt-12 mb-12 gap-12">
          {steps.slice(2, 4).map((step, index) => (
            <React.Fragment key={index}>
              <Card
                index={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                buttonText={"r"}
                onButtonClick={() => alert(`${step.title} clicked!`)}
                className="w-[150px] h-[200px] flex flex-col items-center justify-center text-center"
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Recruitment;
