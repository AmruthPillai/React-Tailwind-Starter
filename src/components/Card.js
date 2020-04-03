import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="shadow my-12 py-12 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Card;
