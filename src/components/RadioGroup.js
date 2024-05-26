// src/components/RadioGroup.js
import React from 'react';

export const RadioGroup = ({ children }) => {
  return <div className="flex space-x-4">{children}</div>;
};

export const RadioGroupItem = ({ id, value, ...props }) => {
  return (
    <input
      id={id}
      type="radio"
      value={value}
      className="form-radio"
      {...props}
    />
  );
};
