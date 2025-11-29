const Button = ({ label, onClick, className, disabled = false }) => {
  return (
    <button
      className={`btn ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
