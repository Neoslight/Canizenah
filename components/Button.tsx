import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  fullWidth = false,
}) => {
  // Enhanced base style with lift effect (hover:-translate-y-1) and smoother duration
  const baseStyle = "font-display font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#364e61] focus:ring-primary shadow-md",
    // Accent uses Primary text for contrast
    accent: "bg-accent text-primary hover:bg-[#d4c57b] shadow-md hover:shadow-xl focus:ring-accent",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};