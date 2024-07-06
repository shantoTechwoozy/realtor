import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Cards from "@/components/card";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
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
      <Team />
      <Features />
      <About />
      <CallToAction />
      
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
    </main>
  );
}
