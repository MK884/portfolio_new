import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--accent)]
    text-white
    border-[var(--accent)]
    hover:opacity-90
  `,

  secondary: `
    bg-[var(--surface)]
    text-[var(--foreground)]
    border-[var(--border)]
    hover:bg-[var(--surface-hover)]
  `,

  outline: `
    bg-transparent
    text-[var(--foreground)]
    border-[var(--border)]
    hover:bg-[var(--surface)]
  `,

  ghost: `
    bg-transparent
    text-[var(--muted)]
    border-transparent
    hover:text-[var(--foreground)]
    hover:bg-[var(--surface)]
  `,
};

const sizes = {
  sm: `
    h-8
    px-3
    text-[11px]
  `,

  md: `
    h-10
    px-4
    text-xs
  `,

  lg: `
    h-11
    px-5
    text-sm
  `,
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        border
        font-mono
        font-medium
        whitespace-nowrap

        transition-all
        duration-200
        ease-out

        hover:-translate-y-0.5

        active:translate-y-0
        active:scale-[0.98]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--accent)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--background)]

        disabled:pointer-events-none
        disabled:opacity-50

        ${variants[variant]}
        ${sizes[size]}

        ${fullWidth ? "w-full" : ""}

        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="shrink-0">
          {icon}
        </span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="shrink-0">
          {icon}
        </span>
      )}
    </button>
  );
}