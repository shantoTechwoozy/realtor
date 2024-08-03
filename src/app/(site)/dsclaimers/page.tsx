import React from 'react';
import { FaInfoCircle, FaLink, FaExclamationTriangle, FaEnvelope, FaPhone } from 'react-icons/fa';

const Disclaimers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 lg:mt-32 mt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Disclaimers</h1>
        <p className="text-gray-600 mb-4">
          {/* <strong>Effective Date:</strong> [Insert Date] */}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaExclamationTriangle className="w-6 h-6 text-yellow-500 mr-2" />
            General Disclaimer
          </h2>
          <p className="text-gray-600">
            The information provided on Shohidul Islam&apos;s Real Estate website is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy, completeness, or reliability of the information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaExclamationTriangle className="w-6 h-6 text-yellow-500 mr-2" />
            No Warranty
          </h2>
          <p className="text-gray-600">
            Our website and services are provided on an "as is" and "as available" basis. We do not warrant that our website will be free from errors, interruptions, or viruses.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaLink className="w-6 h-6 text-blue-500 mr-2" />
            External Links
          </h2>
          <p className="text-gray-600">
            Our website may contain links to external websites. We are not responsible for the content or privacy practices of these third-party sites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaExclamationTriangle className="w-6 h-6 text-yellow-500 mr-2" />
            Real Estate Transactions
          </h2>
          <p className="text-gray-600">
            Any real estate transactions conducted through our website are subject to applicable laws and regulations. We are not liable for any issues arising from such transactions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaExclamationTriangle className="w-6 h-6 text-yellow-500 mr-2" />
            Changes to Disclaimer
          </h2>
          <p className="text-gray-600">
            We may update this Disclaimer at any time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Contact Us
          </h2>
          <div className="text-gray-600">
            <p className="flex items-center mb-2">
              <FaPhone className="w-5 h-5 text-green-500 mr-2" />
              408.649.1164
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="w-5 h-5 text-blue-500 mr-2" />
              <a href="mailto:shohid.realty@gmail.com">shohid.realty@gmail.com</a>
            </p>
            <p className="text-gray-600">
              37600 Central Ct#264, Newark, CA 94569
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Disclaimers;
