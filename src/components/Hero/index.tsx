import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat pt-[100px] md:pt-[120px] lg:pt-[200px] pb-[120px] md:pb-[130px] lg:pb-[200px]"
    >
      {/* Background Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-black opacity-30 blur-lg"></div>

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center text-white"
              data-wow-delay=".2s"
            >
              <h1 className="mb-6 text-3xl lg:text-5xl font-bold leading-snug">
                Find Your Perfect Home
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base lg:text-lg font-medium">
                Discover a wide range of properties tailored to fit your
                lifestyle. Whether you&apos;re looking for a modern apartment,
                a cozy house, or a luxurious mansion, we have something for
                everyone.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <Link
                    href="https://mail.google.com"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-7 py-[14px] text-center text-white font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-black"
                  >
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
