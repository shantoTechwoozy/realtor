import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Shohidul Islam (Real Estate Agent | Realtor)",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
    </main>
  );
};

export default AboutPage;
