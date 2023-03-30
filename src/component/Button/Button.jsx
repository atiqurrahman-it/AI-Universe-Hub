import React from "react";
import "./Button.css";
const Button = (props) => {
  const { children } = props;
  return (
    <div className="py-3 text-center">
      <button className="btn btn-secondary">{children}</button>
    </div>
  );
};

export default Button;
