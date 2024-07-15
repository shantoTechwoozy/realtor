"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaIdBadge } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative pb-20">
      <div className="container mx-auto flex flex-wrap items-stretch">
        <div className="w-full lg:w-5/12 xl:w-4/12 px-4">
          <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark">
            <h3 className="mb-12 text-2xl font-semibold text-dark dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaIdBadge className="text-primary text-xl" />
                <div>
                  <p className="text-base text-dark dark:text-white font-semibold">Shohidul Islam</p>
                  <p className="text-sm text-body-color">Real Estate Agent | Realtor</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaIdBadge className="text-primary text-xl" />
                <div>
                  <p className="text-base text-dark dark:text-white">DRE # 02160189</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary text-xl" />
                <div>
                  <p className="text-base text-dark dark:text-white">408.649.1164</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary text-xl" />
                <div>
                  <p className="text-base text-dark dark:text-white">shohid.realty@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary text-xl" />
                <div>
                  <p className="text-base text-dark dark:text-white">
                    37600 Central Ct#264, Newark, CA 94569
                  </p>
                </div>
              </div>
            </div>
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