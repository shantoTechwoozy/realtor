import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const LiveTextBanner = () => {
  return (
    <div className="bg-black text-white px-3 py-2 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 relative overflow-hidden z-50">
      <div className="whitespace-nowrap animate-marquee text-glow">
        <p className="text-center font-medium sm:text-left inline-block mr-8">
          SHOHIDUL ISLAM, REALTOR, IS DEDICATED TO ENSURING DIGITAL ACCESSIBILITY FOR ALL. WE'RE CONSTANTLY IMPROVING OUR WEB EXPERIENCE. YOUR FEEDBACK AND ACCOMMODATION REQUESTS ARE WELCOME. CONTACT US TO REPORT ISSUES OR SEEK ACCOMMODATIONS.&nbsp;&nbsp;
          <strong>Shohidul Islam</strong>&nbsp;&nbsp;
          <strong>Real Estate Agent | Realtor</strong>&nbsp;&nbsp;
          <strong>DRE # 02160189</strong>&nbsp;&nbsp;
          <FaPhoneAlt className="inline mr-1" /> 408.649.1164&nbsp;&nbsp;
          <FaEnvelope className="inline mr-1" /> shohid.realty@gmail.com&nbsp;&nbsp;
          <FaMapMarkerAlt className="inline mr-1" /> 37600 Central Ct#264, Newark, CA 94569
        </p>
      </div>
    </div>
  );
};

export default LiveTextBanner;
