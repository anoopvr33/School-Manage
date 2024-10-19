import "./button.css";

const Button = ({ children, OnClick, className }) => {
  return (
    <div className="button">
      <button onClick={OnClick} className={`btn ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
