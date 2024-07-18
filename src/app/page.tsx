import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Cards from "@/components/card";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Poster from "@/components/About/poster";
import { Metadata } from "next";
import LiveTextBanner from "@/components/Announcement";

export const metadata: Metadata = {
  title: "Shohidul Islam (Real Estate Agent | Realtor)",
  description: "Shohidul Islam (Real Estate Agent | Realtor)",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <LiveTextBanner/>
      <About />
      <hr className="my-8 mx-auto w-64 border-t-2 border-gray-300 dark:border-gray-700" />
      <Poster />
      <CallToAction />
      <hr className="my-8 mx-auto w-64 border-t-2 border-gray-300 dark:border-gray-700" />
      <Cards />
      <hr className="my-8 mx-auto w-64 border-t-2 border-gray-300 dark:border-gray-700" />
      <Contact />
    </main>
  );
}
