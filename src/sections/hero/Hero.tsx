import { Button } from "@/ui";
import { FaChevronRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import style from "./hero.module.scss";

function Hero() {
  return (
    <section className={style.section}>
      <h1>Merchnat khalid</h1>
      <h2>Full Stck Developer</h2>
      <div className={style.icons}>
        <a href="https://github.com/MK884" target="_blank">
          <FaGithub size={24} cursor="pointer" />
        </a>
        <a href="https://www.linkedin.com/in/merchant-khalid/" target="_blank">
          <FaLinkedin size={24} cursor="pointer" />
        </a>
        <a href="mailto:marchantkhalid7810@gmail.com" target="_blank">
          <MdEmail size={24} cursor="pointer" />
        </a>
        <a href="https://x.com/KhalidMarchant" target="_blank">
          <FaXTwitter size={24} cursor="pointer" />
        </a>
      </div>
      <div className={style.button}>
        <Button
          label="Resume"
          Icon={FaChevronRight}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1pYiassgU-dzdOWV1IFjtlcxcC2yCeE1I/view?usp=sharing",
              "_blank"
            )
          }
        />
      </div>
    </section>
  );
}

export default Hero;
