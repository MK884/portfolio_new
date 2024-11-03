import { Switch } from "@/components";
import { useTheme } from "@/context";
import { Avatar } from "@/ui";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import styles from "./header.module.scss";

function Header() {
  const { theme } = useTheme();

  let isDark = theme === "dark";

  return (
    <nav style={styles}>
      <div className={styles.main}>
        <div className={styles.title}>
        <Avatar text="khalid" src="khalid/6.jpeg" alt="khalid merchant" />
        </div>
        <div className={styles.swicth}>
          <MdOutlineLightMode
            size={20}
            color={isDark ? "#bababa" : "var(--text-primary)"}
          />
          <Switch />
          <MdOutlineDarkMode
            size={20}
            color={isDark ? "var(--text-primary)" : "#bababa"}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
