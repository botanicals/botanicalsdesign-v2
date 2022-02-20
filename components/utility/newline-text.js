import React from 'react';

const NewlineText = ({ children }) => {
  return (
    <span className="space-y-1">
      {String(children || '')
        .split('\n')
        .map((string, index) => (
          <p key={index}>{string}</p>
        ))}
    </span>
  );
};

export default NewlineText;
