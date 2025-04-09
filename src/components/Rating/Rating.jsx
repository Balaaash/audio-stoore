import React from 'react';
import './Rating.css';

const Rating = ({ value, max = 5 }) => {
  return (
    <div className="rating">
      {[...Array(max)].map((_, i) => (
        <span 
          key={i} 
          className={`star ${i < value ? 'filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;