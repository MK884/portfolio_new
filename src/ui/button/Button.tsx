import style from "./button.module.scss";

const Button = ({
  label,
  Icon,
  IconStyle = {},
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={"button"}
      className={style.button}
      {...props}
    >
      {Icon && <Icon style={IconStyle} />}
      {label}
    </button>
  );
};

export default Button;
