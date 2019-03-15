import React from "react";
import './style.css';

const Button = ({ onClick, title }) => (
  <button
      className='form-font button'
      type="submit me"
      onClick={onClick}
  >
    {title}
  </button>
);

export default Button;