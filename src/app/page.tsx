import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Cards from "@/components/card";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Poster from "@/components/About/poster";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shohidul Islam (Real Estate Agent | Realtor)",
  description: "Shohidul Islam (Real Estate Agent | Realtor)",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <hr className="my-8 mx-auto w-64 border-t-2 border-gray-300 dark:border-gray-700" />
      <About />
      <hr className="my-8 mx-auto w-64 border-t-2 border-gray-300 dark:border-gray-700" />
      <Poster />
      <hr className="my-8 mx-auto w-64 border-t-2 border-gray-300 dark:border-gray-700" />
      <Cards />
      <hr className="my-8 mx-auto w-64 border-t-2 border-gray-300 dark:border-gray-700" />
      <CallToAction />
      <Contact />
    </main>
  );
}
