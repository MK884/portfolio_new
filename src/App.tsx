import Header from "@/components/header/Header";
import "@/styles/main.scss";
import { About, Hero, Project, Skills } from "@/sections";

export default function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Skills />
      <Project />
      <div style={{ background: 'var(--border-strong)',width:'100%', height: 1, marginBlock:'1rem'}} />
      <About />
    </div>
  );
}
