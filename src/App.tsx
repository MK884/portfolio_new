import { Header } from "./layout/Header";
import { About } from "./sections/About";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import { Hero } from "./sections/Hero";
import OpenSource from "./sections/OpenSource";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

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
