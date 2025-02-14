import Typography from "@/components/ui/Typography";
import icons from "@/components/utils/Icons";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white sm:bg-gray-100 global-margin md:py-16">
      <section className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 global-padding w-full items-center">
          {/* Left Content */}
          <div>
            {/* Header Section */}
            <div className="w-full flex items-center justify-center md:justify-start gap-3 py-4 ">
              <Image src={icons.tickBox} alt="tick" width={37} height={37} />
              <Typography as="h3" color="text-primary-orange">
                WHY CHOOSE US
              </Typography>
            </div>
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-6 md:mt-0">
              More Than 10+ Years Experience
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              WE Provide IT SERVICES
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-6 leading-7">
              Collaboratively envisioned user-friendly supply chains and cross
              unit imperative. Authoritatively fabricate competitive resources
              and holistic. Holistically restore real-time resources whereas
              standardized networks.
            </p>
            {/* Stats Section */}
            <div className="flex gap-6 mt-12">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-primary-orange flex items-center justify-center text-lg font-bold text-primary-blue">
                    78.6%
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">
                    BUSINESS GROW
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Efficiently transition top-line ideas before market.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-primary-blue flex items-center justify-center text-lg font-bold text-primary-blue">
                    85.8%
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">
                    QUALITY PRODUCTS
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Efficiently transition top-line ideas before market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for Image */}
          <div className="bg-gray-300 h-[300px] md:h-[400px] flex items-center justify-center md:mt-6">
            {/* Replace with actual image */}
            {/* <p className="text-gray-500">Image Placeholder</p> */}
            <Image
              src={"/images/CUSTOMER_SUCCESS.png"}
              alt="Customer Success"
              width={560}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
