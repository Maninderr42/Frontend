import React from 'react';

export function Card(props) {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
      {props.children}
    </div>
  );
}

export function CardHeader(props) {
  return <div className="p-4">{props.children}</div>;
}

export function CardTitle(props) {
  return <h2 className="text-xl font-semibold">{props.children}</h2>;
}

export function CardContent(props) {
  return <div className="p-4">{props.children}</div>;
}

export function CardFooter(props) {
  return <div className="p-4 flex justify-end">{props.children}</div>;
}
