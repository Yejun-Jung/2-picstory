import React from "react";
import "./Input.scss";

const Input = ({ 
  type="text", 
  placeholder, 
  name,
  value, 
  onChange, 
  onBlur, 
  error,
  label,
  icon,
  disabled=false,
  className='',
  ...props 
}) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input 
          type={type} 
          name={name}
          value={value}
          placeholder={placeholder} 
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className="input-field"
          {...props} 
        />
      </div>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;