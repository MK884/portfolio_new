import style from "./button.module.scss";

const Button = ({
  label,
  styles = {},
  Icon,
  IconStyle = {},
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={"button"}
      style={styles}
      className={style.button}
      {...props}
    >
      {Icon && <Icon style={IconStyle} />}
      {label}
    </button>
  );
};

export default Button;
