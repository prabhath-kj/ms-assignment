import React from 'react';

interface ButtonProps {
  bgColor?: string;      
  textColor?: string;   
  text: string;          
  onClick?: () => void;  
  className?: string;   
}

const Button: React.FC<ButtonProps> = ({ bgColor = 'bg-white', textColor = 'text-black', text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${bgColor} ${textColor} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
