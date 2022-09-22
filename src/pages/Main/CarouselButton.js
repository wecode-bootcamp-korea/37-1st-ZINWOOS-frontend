import React from 'react';

const CarouselButton = ({ click, onClick }) => {
  return (
    <button onClick={onClick} className={`CarouselButton btn-${click}`}>
      <i className="fa-solid fa-chevron-right" />
    </button>
  );
};

export default CarouselButton;
