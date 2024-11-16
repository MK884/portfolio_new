import Header from "@/components/header/Header";
import "@/styles/main.scss";
import { About, Gallery, Hero, Project, Skills } from "@/sections";
import { Footer } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />

      {/* divider */}
      <div
        style={{
          background: "var(--border-strong)",
          width: "100%",
          height: 1,
          marginBlock: "1rem",
        }}
      />

      <Gallery />
      <Footer />
    </div>
  );
}
