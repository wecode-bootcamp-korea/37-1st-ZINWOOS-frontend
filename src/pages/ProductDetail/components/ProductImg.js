import React from 'react';
import { useState } from 'react';
import './ProductImg.scss';

const ProductImg = ({ img }) => {
  const [mainImg, setMainImg] = useState(img[0]);
  const MainImgHandler = e => setMainImg(e.target.src);

  return (
    <div className="ProductImg">
      <div className="product-img-container">
        <img className="product-img" alt="진우님의 시간" src={mainImg} />
      </div>
      <div className="product-sub-img-container">
        <div onMouseEnter={MainImgHandler} className="sub-img-wrap">
          <img className="product-sub-img" alt="진우님의 시간" src={img[0]} />
        </div>
        <div onMouseEnter={MainImgHandler} className="sub-img-wrap">
          <img className="product-sub-img" alt="진우님의 시간" src={img[1]} />
        </div>
        <div onMouseEnter={MainImgHandler} className="sub-img-wrap">
          <img className="product-sub-img" alt="진우님의 시간" src={img[2]} />
        </div>
      </div>
    </div>
  );
};

export default ProductImg;
