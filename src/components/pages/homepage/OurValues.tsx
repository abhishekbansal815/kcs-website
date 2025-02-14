import Card from "@/components/ui/cards/Card2";
import CommonHeader from "@/components/ui/CommonHeader";
import icons from "@/components/utils/Icons";
import React from "react";

const OurValues = () => {
  const cardsData = [
    {
      icon: icons.innovate,
      title: "INNOVATION",
      description: (
        <>
          Katalyst envisions a commitment to the Kaizen approach, fostering
          continuous improvements through incremental changes. The company
          prioritizes long-term engagement with customers, aiming for sustained
          positive outcomes.
        </>
      ),
      buttonText: "READ MORE",
    },
    {
      icon: icons.optimize,
      title: "CUSTOMER SUCCESS",
      description: (
        <>
          The essence of Katalyst Consulting Services as &quot;agents of
          change&quot; is rooted in philosophy of quality and reliability. With
          an unwavering focus on service quality and innovative design thinking,
          we play a pivotal role in helping our customers achieve success.
        </>
      ),
      buttonText: "READ MORE",
    },

    {
      icon: icons.Frugality,
      title: "FRUGALITY",
      description:
        "The vision of the company is to optimize the utilization of customer resources for enhanced financial performance by delivering lean and efficient services without compromising quality. ",
      buttonText: "READ MORE",
    },
  ];

  return (
    <div className="text-white h-auto md:h-[550px] global-margin global-padding">
      <div className="bg-gradient-to-b from-primary-blue to-[#1B1B1B] md:h-[317px] relative pt-12">
        <div className="flex flex-col items-center">
          <CommonHeader color="text-primary-orange">OUR VALUES</CommonHeader>
        </div>
        <div className="max-w-screen-xl mx-auto px-[6rem] xl:px-12 pb-12 md:pb-0 md:h-[600px] md:absolute inset-0 flex items-center justify-center ">
          <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-16 sm:gap-4 md:gap-10 lg:gap-12 mt-12 mb-12">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                onButtonClick={() => alert(`${card.title} clicked!`)}
                index={`0${index + 1}`}
                className="w-full xl:w-[360px] h-[230px] xl:h-[360px]"
              />
            ))}
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
