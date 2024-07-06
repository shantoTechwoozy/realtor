"use client"
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <section id="contact" className="relative py-20 md:py-[110px]">
      <div className="container mx-auto flex flex-wrap items-stretch">
        <div className="w-full lg:w-5/12 xl:w-4/12 px-4">
          <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark">
            <h3 className="mb-12 text-2xl font-semibold text-dark dark:text-white">
              Send us a Message
            </h3>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-xs text-dark dark:text-white"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-md border border-transparent py-3 px-[14px] text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-xs text-dark dark:text-white"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@yourmail.com"
                  className="w-full rounded-md border border-transparent py-3 px-[14px] text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-xs text-dark dark:text-white"
                >
                  Phone*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+885 1254 5211 552"
                  className="w-full rounded-md border border-transparent py-3 px-[14px] text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs text-dark dark:text-white"
                >
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  className="w-full rounded-md border border-transparent py-3 px-[14px] text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                  required
                ></textarea>
              </div>
              <div className="mb-0">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-7/12 xl:w-8/12 relative">
          <div className="relative h-full bg-[url('/images/action/contact.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
