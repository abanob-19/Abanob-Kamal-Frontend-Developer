// src/components/Error.js
import React from 'react';
    
const Error = ({ message }) => {
  return (
    <div className="error bg-blue-500 p-4 md:p-8">
      <p>Error: {message}</p>
    </div>
  );
};

export default Error;
