import React from 'react';
import { useState } from 'react';
import './ProductImg.scss';

const ProductImg = ({ img, alt }) => {
  const [mainImg, setMainImg] = useState(img[0]);

  return (
    <div className="ProductImg">
      <div className="product-img-container">
        <img className="product-img" alt={alt} src={mainImg} />
      </div>
      <div className="product-sub-img-container">
        {img.map((item, i) => {
          return (
            <div
              onMouseEnter={e => setMainImg(e.target.src)}
              key={i}
              className="sub-img-wrap"
            >
              <img className="product-sub-img" alt={alt} src={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImg;
