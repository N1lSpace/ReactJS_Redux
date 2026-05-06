import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  children,
}: ButtonProps) {
  const baseStyle =
    "px-4 py-2 rounded font-medium transition duration-200";

  const variantStyle = {
    primary: "bg-black-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle[variant]} ${disabledStyle} ${className}`}
    >
      {children ? children : label}
    </button>
  );
};

export default Button;