import { links } from "@/data";
import { Button } from "@/ui";
import { FaChevronRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import style from "./hero.module.scss";

function Hero() {
  return (
    <section className={style.section}>
      <h1>Merchnat khalid</h1>
      <h2>Frontend Developer</h2>
      <div className={style.icons}>
        <a href={links?.github} target="_blank">
          <FaGithub size={24} cursor="pointer" />
        </a>
        <a href={links?.linkedin} target="_blank">
          <FaLinkedin size={24} cursor="pointer" />
        </a>
        <a href={`mailto:${links?.email}`} target="_blank">
          <MdEmail size={24} cursor="pointer" />
        </a>
        <a href={links?.twitter} target="_blank">
          <FaXTwitter size={24} cursor="pointer" />
        </a>
      </div>
      <div className={style.button}>
        <Button
          label="Resume"
          Icon={FaChevronRight}
          onClick={() => window.open(links?.resume, "_blank")}
        />
      </div>
    </section>
  );
}

export default Hero;
