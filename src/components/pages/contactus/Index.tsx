"use client";

import React, { ChangeEvent, useState } from "react";
import Typography from "@/components/ui/Typography";

const ContactUs = () => {
  const [formError, setFormError] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  const handleSubmit = (event: ChangeEvent<unknown>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const website = form.website.value;

    let valid = true;

    // Validate email or phone
    if (!email && !mobile) {
      setFormError("Please provide either an email or a phone number.");
      form.email.classList.add("error");
      form.mobile.classList.add("error");
      valid = false;
    } else {
      setFormError("");
      form.email.classList.remove("error");
      form.mobile.classList.remove("error");
    }

    // Validate website
    const websiteRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (website && !websiteRegex.test(website)) {
      setWebsiteError("Please enter a valid website URL.");
      form.website.classList.add("error");
      valid = false;
    } else {
      setWebsiteError("");
      form.website.classList.remove("error");
    }

    // If valid, process form submission
    if (valid) {
      console.log("Form submitted!", { email, mobile, website });
      form.reset();
    }
  };

  return (
    <>
      <section className="mt-12 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center py-6 lg:py-20 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8">
        <div className="lg:col-span-12 flex justify-center items-center">
          <img
            src="/images/contactus.png"
            alt="ContactUs"
            className="w-full max-w-sm sm:max-w-screen-md lg:max-w-screen-lg h-auto"
          />
        </div>
      </section>

      <section
        className="md:p-4"
        style={{
          background: "#D6D6D624",
        }}
      >
        <div className="max-w-screen-xl mx-auto mb-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 p-6 text-[#11344E]">
              <Typography as="h4" color="text-primary-orange" className="mb-8">
                Keep in touch with us
              </Typography>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-12 lg:gap-6 gap-2 sm:gap-4"
              >
                <div className="mb-2 col-span-12 md:col-span-6">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E]"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-2 col-span-12 md:col-span-6">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E]"
                    placeholder="Email ID"
                  />
                </div>
                <div className="mb-2 col-span-12 md:col-span-6">
                  <input
                    type="tel"
                    id="mobile"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E]"
                    placeholder="Phone Number"
                    pattern="[0-9]{12}"
                    maxLength={12}
                  />
                </div>
                <div className="mb-2 col-span-12 md:col-span-6">
                  <input
                    type="url"
                    id="website"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E]"
                    placeholder="Website"
                  />
                  {websiteError && (
                    <p className="text-red-500 text-sm">{websiteError}</p>
                  )}
                </div>
                <div className="mb-2 col-span-12">
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11344E]"
                    placeholder="Your Message"
                    rows={4}
                    required
                  ></textarea>
                </div>
                {formError && (
                  <p className="text-red-500 text-sm col-span-12">
                    {formError}
                  </p>
                )}
                <div className="col-span-12 md:col-span-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#F38023] text-[#11344E] font-bold rounded-lg hover:bg-[#F38028] transition duration-200 focus:ring-1 focus:ring-[#11344E]"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-12 lg:col-span-4 p-6 text-[#11344E]">
              <Typography as="h4" color="text-primary-orange" className="mb-8">
                Contact Details
              </Typography>
              <ContactDetail
                icon="/icons/location2.png"
                description="U209, 111 Overton Road, Williams Landing, VIC 3207, Australia"
              />
              <ContactDetail
                icon="/icons/telephone2.png"
                description="1300 772 824"
              />
              <ContactDetail
                icon="/icons/mail2.png"
                description="info@katalystcs.com"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ContactDetail = ({
  icon,
  description,
}: {
  icon: string;
  description: string;
}) => (
  <div className="mb-4 flex items-start">
    <img src={icon} alt="Icon" className="w-5 mr-4" />
    <Typography as="span" variant="caption">
      {description}
    </Typography>
  </div>
);

export default ContactUs;
