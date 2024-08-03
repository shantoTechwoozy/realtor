import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Poster from "@/components/About/poster";
import { Metadata } from "next";
import LiveTextBanner from "@/components/Announcement";
import Project from "./(site)/projects/page";

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
      <Project />
      <hr className="my-8 mx-auto w-64 border-t-2 border-gray-300 dark:border-gray-700" />
      <Contact />
    </main>
  );
}
