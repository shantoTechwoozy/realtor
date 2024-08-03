import React from 'react';
import { FaCookie, FaEnvelope, FaInfoCircle, FaPhone } from 'react-icons/fa';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 lg:mt-32 mt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Cookie Policy</h1>
        <p className="text-gray-600 mb-4">
          {/* <strong>Effective Date:</strong> [Insert Date] */}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCookie className="w-6 h-6 text-brown-500 mr-2" />
            Introduction
          </h2>
          <p className="text-gray-600">
            Shohidul Islam's Real Estate website uses cookies to enhance your experience. This Cookie Policy explains what cookies are, how we use them, and how you can control them.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCookie className="w-6 h-6 text-brown-500 mr-2" />
            What Are Cookies
          </h2>
          <p className="text-gray-600">
            Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and improve your browsing experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCookie className="w-6 h-6 text-brown-500 mr-2" />
            How We Use Cookies
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the functioning of our website and cannot be disabled.</li>
            <li><strong>Performance Cookies:</strong> These cookies help us understand how you use our website, allowing us to improve its performance.</li>
            <li><strong>Functionality Cookies:</strong> These cookies remember your preferences and provide a personalized experience.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCookie className="w-6 h-6 text-brown-500 mr-2" />
            Managing Cookies
          </h2>
          <p className="text-gray-600">
            You can control or disable cookies through your browser settings. Please note that disabling cookies may affect your experience on our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCookie className="w-6 h-6 text-brown-500 mr-2" />
            Changes to Cookie Policy
          </h2>
          <p className="text-gray-600">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.
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

export default CookiePolicy;
