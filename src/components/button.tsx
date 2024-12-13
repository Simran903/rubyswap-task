interface ButtonProps {
  buttonText: string;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonText, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
};

export default Button;