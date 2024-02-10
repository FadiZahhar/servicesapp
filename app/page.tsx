"use client"
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Counts from "@/components/Counts";
import FAQ from "@/components/Faq";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  return (
    <>
    <Head>
  <title>Pro-Solutions.net</title>
  <meta name="description" content="Bringing Your Ideas to Life with Agile MVP Development" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Pro-Solutions.net" />
  <meta property="og:description" content="Bringing Your Ideas to Life with Agile MVP Development" />
  <meta property="og:image" content="/_next/static/media/logo-blue.aa71568e.png" />
  <meta property="og:url" content="https://www.pro-solutions.net" />
  <meta name="twitter:card" content="/_next/static/media/logo-blue.aa71568e.png" />
  <meta name="twitter:site" content="@pro-solutions.net" />
  <meta name="twitter:creator" content="@pro-solutions.net" />
  <meta name="twitter:title" content="Pro-Solutions.net" />
  <meta name="twitter:description" content="Bringing Your Ideas to Life with Agile MVP Development" />
  <meta name="twitter:image" content="/_next/static/media/logo-blue.aa71568e.png" />
  <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
<link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
<link rel="manifest" href="/icons/manifest.json" />
<meta name="msapplication-TileColor" content="#ffffff" />
<meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
<meta name="theme-color" content="#ffffff"></meta>
</Head>
    <main>
    <Hero />

<About />

<Featured />

<Services />
<Pricing />
<FAQ />
<Contact />
</main>
<footer id="footer">
<div className="container py-4">
  <div className="copyright">
    &copy; Copyright <strong><span>Pro-Solutions</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="https://pro-solutions.net/">Pro-solutions.net</a>
  </div>
</div>
</footer>
  </>
  );
}
