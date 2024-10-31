type Theme = "dark" | "light";
interface AvatarProps {
  src?: string;
  alt?: string;
  styles?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  text?: string;
}

interface AvatarGrpProps {
  avatars: AvatarProps[];
  size?: "sm" | "md" | "lg";
  styles?: React.CSSProperties;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  fullWidth?: boolean;
  styles?: React.CSSProperties;
  Icon?: IconType;
  IconStyle?: React.CSSProperties;
  disabled?: boolean;
}

interface ISkillCard {
  text?: string;
  src?: string;
}
