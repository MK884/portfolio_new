import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import style from "./footer.module.scss";
function Footer() {
  return (
    <footer className={style.footer}>
      <p>Merchant Khalid</p>
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
    </footer>
  );
}

export default Footer;
