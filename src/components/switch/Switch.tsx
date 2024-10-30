import { useTheme } from "@/context";
import styles from "./switch.module.scss";

function Switch() {
  const { theme, toggleTheme } = useTheme();
  const isChecked = theme === "dark";

  return (
    <input
      type="checkbox"
      onChange={toggleTheme}
      checked={isChecked}
      className={styles.switch}
    />
  );
}

export default Switch;
