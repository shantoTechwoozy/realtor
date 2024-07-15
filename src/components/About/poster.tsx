import Image from "next/image";

const Poster = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 pb-8 pt-10 dark:bg-gray-900 lg:pb-16 lg:pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="order-2 w-full px-4 sm:order-1 sm:w-1/2">
              <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-transparent sm:mb-8 h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[700px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/about/poster.jpg"
                    alt="Real Estate Expert"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 w-full px-4 sm:order-2 sm:w-1/2">
              <div className="mb-5 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl">
                  Your Trusted Real Estate Expert
                </h2>
                <p className="mb-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Shohidul Islam is a dedicated and highly experienced real estate agent, recognized for his exceptional service and deep understanding of the market. With a genuine passion for helping clients find their dream homes, Shohidul offers personalized assistance and expert market insights to guide you in making informed decisions.
                  <br /><br />
                  Our listings feature detailed descriptions, high-quality photos, and virtual tours to give you a comprehensive view of the properties. Shohidul ensures secure transactions and provides flexible viewing options, including virtual tours. Our 24/7 customer support is always available to assist with any queries.
                  <br /><br />
                  Discover detailed neighborhood guides to find the perfect community, get financing assistance from our experts, and take advantage of our moving services for a seamless transition. We also offer legal support to ensure compliance and protect your interests.
                </p>

                <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  <p className="font-bold">Contact Information:</p>
                  <p className="mb-1">Shohidul Islam</p>
                  <p className="mb-1">
                    Real Estate Agent | Realtor, DRE # 02160189, 408.649.1164
                  </p>
                  <p className="mb-1">shohid.realty@gmail.com</p>
                  <p>37600 Central Ct#264, Newark, CA 94569</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;
