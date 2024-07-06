import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Cards from "@/components/card";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shohidul Islam (Real Estate Agent | Realtor)",
  description:
    "Shohidul Islam (Real Estate Agent | Realtor)",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Cards/>
      <About />
      <CallToAction />
      
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
    </main>
  );
}
