import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden py-20 lg:py-[115px]">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/action/action.jpg')" }}>
          {/* Background image container */}
        </div>
        <div className="w-full px-4 lg:w-1/2 flex items-center">
          <div className="mx-auto max-w-[570px] text-center lg:text-left">
            <h2 className="mb-2.5 text-3xl font-bold text-slate-600 md:text-[38px] md:leading-[1.44]">
              <span>What Are You Looking For?</span>
              <span className="text-3xl font-normal  md:text-[40px]">
                {" "}
                Get Started Now{" "}
              </span>
            </h2>
            <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-slate-600 lg:mx-0">
              There are many variations of passages of Lorem Ipsum but the
              majority have suffered in some form.
            </p>
            <Link
              href="/"
              className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
            >
              Start using Play
            </Link>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CallToAction;
