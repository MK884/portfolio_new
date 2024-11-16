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
  Icon?: IconType;
  IconStyle?: React.CSSProperties;
  disabled?: boolean;
}

interface ISkillCard {
  text?: string;
  src?: string;
}

interface IProjectCard {
  title: string;
  thumbnail?: string;
  techStacks: Array<AvatarProps>;
  demoLink?: string;
  codeLink?: string;
  scaleEffect?: boolean;
}
