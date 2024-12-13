import React from 'react';

type ButtonProps = {
  buttonText: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ buttonText, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
