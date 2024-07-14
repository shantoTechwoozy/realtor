import Image from "next/image";

const Poster = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-10 dark:bg-dark-2 lg:pb-[70px] lg:pt-16"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4 order-2 sm:order-1">
              <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-transparent sm:mb-8 h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[700px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/about/poster.jpg"
                    alt="about image"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>

            <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4 order-1 sm:order-2">
              <div className="mb-5 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Your Trusted Real Estate Expert
                </h2>
                <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Shohidul Islam is a highly experienced and dedicated real estate agent, known for his exceptional service and in-depth knowledge of the market. With a passion for helping clients find their dream homes, Shohidul provides personalized assistance, offering expert market insights to help you make informed decisions. Explore comprehensive property listings with detailed descriptions, high-quality photos, and virtual tours.
                  <br /> <br />
                  Shohidul ensures secure transactions and offers flexible viewing options, including virtual tours. Our 24/7 customer support is here to assist with any queries. Discover neighborhood guides to find the perfect community, and get financing assistance from our experts. Take advantage of our moving services for a hassle-free transition and access legal support to ensure compliance and protect your interests.
                </p>

                <div className="text-base leading-relaxed text-body-color dark:text-dark-6">
                  <p className="font-bold">Contact Information:</p>
                  <p className="mb-1">Shohidul Islam</p>
                  <p className="mb-1">Real Estate Agent | Realtor, DRE # 02160189, 408.649.1164</p>
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
