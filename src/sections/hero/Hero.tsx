import { Button } from "@/ui";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import style from "./hero.module.scss";

function Hero() {
  return (
    <section className={style.section}>
      <h1>Merchnat khalid</h1>
      <h2>Full Stck Developer</h2>
      <Button label="Resume" Icon={FaChevronRight} />
    </section>
  );
}

export default Hero;
