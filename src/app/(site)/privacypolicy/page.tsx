import React from 'react';
import { FaPhone, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 lg:mt-32 mt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          {/* <strong>Effective Date:</strong> [Insert Date] */}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Introduction
          </h2>
          <p className="text-gray-600">
            Welcome to Shohidul Islam's Real Estate website. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and property preferences when you contact us or use our services.</li>
            <li><strong>Usage Data:</strong> We may collect information about your visit to our website, including your IP address, browser type, pages viewed, and the time and date of your visit.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>To Provide Services:</strong> We use your information to respond to your inquiries, provide real estate services, and manage transactions.</li>
            <li><strong>To Improve Our Services:</strong> We use your data to analyze website usage and improve our services.</li>
            <li><strong>For Communication:</strong> We may use your contact information to send you updates about properties, promotions, and other relevant information.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            How We Share Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website and providing services.</li>
            <li><strong>For Legal Purposes:</strong> We may disclose your information if required by law or in response to legal processes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Security
          </h2>
          <p className="text-gray-600">
            We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Your Rights
          </h2>
          <p className="text-gray-600">
            You have the right to access, correct, or delete your personal information. You may also object to the processing of your data under certain conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Changes to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
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

export default PrivacyPolicy;
