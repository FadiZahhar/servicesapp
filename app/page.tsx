
import FrontEndLayout from "@/components/layouts/FrontEndLayout";
import About from "@/components/About";
//import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
//import Counts from "@/components/Counts";
import FAQ from "@/components/Faq";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
//import Skills from "@/components/Skills";
//import Head from "next/head";
//import Image from "next/image";
//import { useRouter } from "next/navigation";
//import { useEffect } from "react";

export default function Home() {

  return (
    <FrontEndLayout>
      <main>
        <Hero />
        <About />
        <Featured />
        <Services />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
    </FrontEndLayout>
  );
}
