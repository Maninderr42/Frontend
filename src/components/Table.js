// src/components/ui/Table.js
import React from 'react';

export const Table = ({ children }) => {
  return <table className="min-w-full border-collapse">{children}</table>;
};

export const TableHead = ({ children }) => {
  return <th className="px-4 py-2 border-b">{children}</th>;
};

export const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

export const TableHeader = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableCell = ({ children }) => {
  return <td className="px-4 py-2 border-b">{children}</td>;
};
