import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-10 dark:bg-dark-2 lg:pb-[70px] lg:pt-16"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Comprehensive Real Estate Support
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Our agents provide personalized assistance, offering expert
                  market insights to help you make informed decisions. Explore
                  comprehensive property listings with detailed descriptions,
                  high-quality photos, and virtual tours.
                  <br /> <br />
                  We ensure secure transactions and offer flexible viewing
                  options, including virtual tours. Our 24/7 customer support is
                  here to assist with any queries. Discover neighborhood guides
                  to find the perfect community, and get financing assistance
                  from our experts. Take advantage of our moving services for a
                  hassle-free transition and access legal support to ensure
                  compliance and protect your interests.
                </p>

                <a
                  href="tel:+13323035436"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
              <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                <video
                  className="h-full w-full object-cover shadow-solid-l"
                  src="/images/about/advertise.mp4"
                  autoPlay
                  muted
                  loop
                  controls={false}
                />
              </div>

              <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                <div>
                  <Image
                    src="/images/about/about-image-01.jpg"
                    alt="about image"
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
