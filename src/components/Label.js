// src/components/Label.js
import React from 'react';

export const Label = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} className="block font-medium">{children}</label>;
};
