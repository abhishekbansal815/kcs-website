"use client";

import React, { ChangeEvent, useState } from "react";
import "./style.css"; // Import the custom CSS file
import CommonHeader from "@/components/ui/CommonHeader";
import Image from "next/image";
import Typography from "@/components/ui/Typography";

const ContactUs = () => {
  const [formError, setFormError] = useState("");

  const handleSubmit = (event: ChangeEvent<unknown>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const mobile = form.mobile.value;

    if (!email && !mobile) {
      setFormError("Please provide either an email or a phone number.");
    } else {
      setFormError(""); // Clear error if validation passes
      // You can now process the form data (e.g., send it to the server)
      console.log("Form submitted!");
    }
  };

  return (
    <section
      className="md:p-4 text-white bg-opacity-10 relative"
      style={{
        background: "linear-gradient(90deg, #11344E, #1B1B1B)", // Gradient background
      }}
    >
      <div className="absolute top-0 left-0 w-[60%] h-full bg-opacity-15">
        <Image
          src="/images/gl_map.png"
          alt="worldmap"
          layout="fill"
          objectFit="cover"
          className=" bg-opacity-70"
        />
      </div>
      <div className="max-w-screen-xl mx-auto mb-8 global-padding">
        {/* Icon and Heading Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <CommonHeader color="text-primary-orange">CONTACT US</CommonHeader>
        </div>

        {/* Three Frames Section with shared background */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Wrapper for both Head Office and Office Sections with single background image */}
          <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Head Office Section */}
            <div className="rounded-lg p-6 text-[#ffffff]">
              <div className="p-4 flex items-start mb-4">
                <div>
                  <Typography as="h5" color="text-white">
                    Head Office
                  </Typography>
                  <Typography as="h5" color="text-primary-orange">
                    Australia
                  </Typography>

                  <div className="rounded-lg w-full mt-6 mb-2 border border-[#ffffff00]">
                    <div className="text-sm text-gray-600 mb-2 flex items-start">
                      <div className="mr-4">
                        <div className="bg-primary-orange opactiy-70 w-12 h-12 rounded-full flex items-center justify-center inline-block">
                          <img
                            src="/icons/location.png"
                            alt="Address Icon"
                            className="w-4"
                          />
                        </div>
                      </div>
                      <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                        <div className="text-sm text-gray-600 mb-2 flex flex-col items-start">
                          <Typography as="h6" color="text-white">
                            Our Location
                          </Typography>
                          <Typography
                            as="p"
                            variant="caption"
                            color="text-white"
                            className="contact-body"
                          >
                            U209, 111 Overton Road, Williams Landing, VIC 3207,
                            Australia
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                    <div className="text-sm text-gray-600 mb-2 flex items-start">
                      <div className="mr-4">
                        <div className="bg-primary-orange opactiy-70 w-12 h-12 rounded-full flex items-center justify-center inline-block">
                          <img
                            src="/icons/telephone.png"
                            alt="Phone Icon"
                            className="w-5"
                          />
                        </div>
                      </div>
                      <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                        <div className="text-sm text-gray-600 mb-2 flex flex-col items-start">
                          <Typography as="h6" color="text-white">
                            Phone Number
                          </Typography>
                          <Typography
                            as="p"
                            variant="caption"
                            color="text-white"
                            className="contact-body"
                          >
                            1300 772 824
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                    <div className="text-sm text-gray-600 mb-2 flex items-start">
                      <div className="mr-4">
                        <div className="bg-primary-orange opactiy-70 w-12 h-12 rounded-full flex items-center justify-center inline-block">
                          <img
                            src="/icons/mail.png"
                            alt="Email Icon"
                            className="w-5"
                          />
                        </div>
                      </div>
                      <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                        <div className="text-sm text-gray-600 mb-2 flex flex-col items-start">
                          <Typography as="h6" color="text-white">
                            Email Address
                          </Typography>
                          <Typography
                            as="p"
                            variant="caption"
                            color="text-white"
                            className="contact-body"
                          >
                            info@katalystcs.com
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Section */}
            <div className="rounded-lg p-6 text-[#ffffff]">
              <div className="p-4 flex items-start mb-4">
                <div>
                  <Typography as="h5" color="text-white">
                    Office
                  </Typography>
                  <Typography as="h5" color="text-primary-orange">
                    India
                  </Typography>
                  <div className="rounded-lg w-full mt-5 mb-2 border border-[#ffffff00]">
                    <div className="text-sm text-gray-600 mb-2 flex items-start">
                      <div className="mr-4">
                        <div className="bg-primary-orange opactiy-70 w-12 h-12 rounded-full flex items-center justify-center inline-block">
                          <img
                            src="/icons/location.png"
                            alt="Address Icon"
                            className="w-4"
                          />
                        </div>
                      </div>
                      <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                        <div className="text-sm text-gray-600 mb-2 flex flex-col items-start">
                          <Typography as="h6" color="text-white">
                            Address
                          </Typography>
                          <Typography
                            as="p"
                            variant="caption"
                            color="text-white"
                            className="contact-body"
                          >
                            156A-Orange City park, Kamtee Road, Yerkheda,
                            Nagpur, 441002 (M.H.), India
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                    <div className="text-sm text-gray-600 mb-2 flex items-start">
                      <div className="mr-4">
                        <div className="bg-primary-orange opactiy-70 w-12 h-12 rounded-full flex items-center justify-center inline-block">
                          <img
                            src="/icons/telephone.png"
                            alt="Phone Icon"
                            className="w-5"
                          />
                        </div>
                      </div>
                      <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                        <div className="text-sm text-gray-600 mb-2 flex flex-col items-start">
                          <Typography as="h6" color="text-white">
                            Phone Number
                          </Typography>
                          <Typography
                            as="p"
                            variant="caption"
                            color="text-white"
                            className="contact-body"
                          >
                            1300 772 824
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                    <div className="text-sm text-gray-600 mb-2 flex items-start">
                      <div className="mr-4">
                        <div className="bg-primary-orange opactiy-70 w-12 h-12 rounded-full flex items-center justify-center inline-block">
                          <img
                            src="/icons/mail.png"
                            alt="Email Icon"
                            className="w-5"
                          />
                        </div>
                      </div>
                      <div className="rounded-lg w-full mb-2 border border-[#ffffff00]">
                        <div className="text-sm text-gray-600 mb-2 flex flex-col items-start">
                          <Typography as="h6" color="text-white">
                            Email Address
                          </Typography>
                          <Typography
                            as="p"
                            variant="caption"
                            color="text-white"
                            className="contact-body"
                          >
                            info@katalystcs.com
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section with explicit background color (40% width) */}
          <div className="md:col-span-2 bg-[#ffffff] rounded-lg shadow-lg p-6 text-[#11344E]">
            <Typography as="h5" className="text-sm font-bold mb-4">
              Please fill in the information below
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E] focus:shadow-sm custom-placeholder"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E] focus:shadow-sm custom-placeholder"
                  placeholder="Email ID"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E] focus:shadow-sm custom-placeholder"
                  placeholder="Phone Number"
                  pattern="[0-9]{12}" // Ensure 12 digits
                  maxLength={12}
                />
              </div>
              {formError && (
                <p className="text-red-500 text-sm mb-4">{formError}</p>
              )}
              <div className="mb-4">
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E] focus:shadow-sm custom-placeholder"
                  placeholder="Your Message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#F38023] text-[#11344E] font-bold rounded-lg hover:bg-[#F38028] transition duration-200 focus:ring-1 focus:ring-[#11344E] focus:shadow-sm"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
