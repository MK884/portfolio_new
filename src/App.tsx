import React from "react";
import { Header } from "./layout/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import OpenSource from "./sections/OpenSource";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <About />
        <Skills />

        <Work />

        <Experience />

        <OpenSource />

        <Certificates />

       <Contact />
      </main>
    </>
  );
}
