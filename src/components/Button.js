// src/components/Button.js
import React from 'react';

export const Button = ({ children,className, ...props }) => {
  return (
    <button {...props} className={`bg-blue-500 text-white py-2 px-4 rounded w-full${className}`}>
      {children}
    </button>
  );
};
