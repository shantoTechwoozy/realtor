import React from 'react';
import { FaPhone, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 lg:mt-32 mt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-4">
          {/* <strong>Effective Date:</strong> [Insert Date] */}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Introduction
          </h2>
          <p className="text-gray-600">
            By using Shohidul Islam's Real Estate website, you agree to these Terms of Service. If you do not agree with these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Services
          </h2>
          <p className="text-gray-600">
            We provide real estate services including property listings, market insights, and transaction management. Our services are subject to change without notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            User Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Accuracy of Information:</strong> You are responsible for providing accurate information when using our services.</li>
            <li><strong>Compliance with Laws:</strong> You agree to comply with all applicable laws and regulations when using our website.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content on our website, including text, images, and logos, is the property of Shohidul Islam and may not be used without permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Limitation of Liability
          </h2>
          <p className="text-gray-600">
            We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Indemnification
          </h2>
          <p className="text-gray-600">
            You agree to indemnify and hold harmless Shohidul Islam and its affiliates from any claims, losses, or damages arising from your use of our website or services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Changes to Terms
          </h2>
          <p className="text-gray-600">
            We may update these Terms of Service at any time. Your continued use of the website constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-6">
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

export default TermsOfService;
