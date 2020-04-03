import React from 'react';

const Card = ({ className, children }) => {
  return (
    <div
      className={`shadow my-12 py-12 flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
