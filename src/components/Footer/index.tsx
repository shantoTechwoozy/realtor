import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[0px]" data-wow-delay=".15s">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
            <Image
                  src=""
                  height={240}
                  width={720}
                  alt="logo"
                  className="h-32 w-full"
                />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Shohidul Islam, Realtor, is dedicated to ensuring digital accessibility for all. We&apos;re constantly improving our web experience. Your feedback and accommodation requests are welcome. Contact us to report issues or seek accommodations.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div>
              <p className="font-medium text-white">Services</p>

              <nav aria-label="Footer Nav" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Buy a Home</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Sell a Home</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Rent a Home</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Mortgage Services</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Resources</p>

              <nav aria-label="Footer Nav" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Real Estate Agents</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Home Valuation</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Neighborhood Guides</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Market Trends</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Company</p>

              <nav aria-label="Footer Nav" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">About Us</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Careers</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Blog</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Legal</p>

              <nav aria-label="Footer Nav" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Disclaimers</a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:opacity-75" href="#">Cookie Policy</a>
                  </li>
               
                </ul>
                
              </nav>
           
            </div>
            <div className="w-full sm:w-[400px] mt-50">
  <div className="flex items-center space-x-4">
    <div className="text-2xl font-semibold text-white mt-4 mb-6 flex-shrink-0">
      <Image
        src="/images/footer/brands/handshake.png"
        height={60}
        width={320}
        alt="logo"
        className="h-12 w-auto object-contain"
      />
    </div>
    <div className="flex-shrink-0">
      <Image
        src="/images/footer/brands/partners.png"
        height={60}
        width={320}
        alt="logo"
        className="h-12 w-80 object-contain "
      />
    </div>
  </div>
</div>

          </div>
          
        </div>
        

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              &copy; 2023 Shohidul Islam, Realtor. All rights reserved.
            </p>

            <p className="mt-4 text-sm text-gray-400 sm:order-first sm:mt-0">
              <a className="inline-block text-teal-700 transition hover:text-teal-700/75" href="tel:+15551234567">+1 (555) 123-4567</a>
              <span className="block sm:inline">|</span>
              <a className="inline-block text-teal-700 transition hover:text-teal-700/75" href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
