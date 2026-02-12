const Button = ({ label, variant ="primary",onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
};

export default Button;
