import React from "react";
import styles from "./header.module.scss";
import { Switch } from "@/components";
import { useTheme } from "@/context";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  const { theme } = useTheme();

  let isDark = theme === "dark";

  return (
    <nav style={styles}>
      <div className={styles.main}>
        <div className={styles.title}>Hello!</div>
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
